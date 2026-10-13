const skillCategories = [
  { category: "Languages", items: ["Python", "TypeScript", "Go", "Rust"] },
  { category: "AI", items: ["LangChain", "MCP", "Qdrant", "OpenAI APIs"] },
  { category: "Backend", items: ["FastAPI", "NestJS", "PostgreSQL", "Redis"] },
  { category: "Frontend", items: ["React", "Next.js"] },
  { category: "Infrastructure", items: ["Docker", "Kubernetes", "Prometheus", "Grafana"] },
];

export function Skills() {
  return (
    <section id="tools" className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-10">
        Skills
      </p>
      <div className="space-y-5">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest w-28 shrink-0">
              {cat.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-5 py-2 rounded-full border border-border text-foreground bg-secondary/30 hover:bg-secondary hover:border-foreground/20 transition-colors cursor-default font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
