"use client";

import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "AI Tooling Platform",
    description: "Internal AI-assisted tooling for operations teams at Cisco.",
    tags: ["Python", "LangChain", "FastAPI"],
  },
  {
    title: "Observability Stack",
    description: "Metrics, tracing, and alerting infrastructure for production services.",
    tags: ["Prometheus", "Grafana", "Go"],
  },
  {
    title: "Blockchain Analytics",
    description: "On-chain data analysis and visualization dashboard.",
    tags: ["TypeScript", "React", "Rust"],
  },
];

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-border p-6 animate-pulse h-48">
      <div className="h-4 w-24 bg-secondary rounded mb-4" />
      <div className="h-6 w-3/4 bg-secondary rounded" />
    </div>
  );
}

export function Projects() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-10">
        Selected Work
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {!loaded
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl border border-border p-6 hover:border-foreground/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
