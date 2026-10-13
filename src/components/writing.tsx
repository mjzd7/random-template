"use client";

import { useEffect, useState } from "react";

const posts = [
  {
    title: "Building AI Systems That Actually Work in Production",
    date: "2025-06-15",
    readTime: "8 min read",
  },
  {
    title: "Why I Stopped Over-Engineering and Started Shipping",
    date: "2025-04-02",
    readTime: "5 min read",
  },
  {
    title: "The Gap Between Prototype and Production",
    date: "2025-01-20",
    readTime: "6 min read",
  },
];

export function Writing() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="writing" className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-10">
        Writing
      </p>
      {!loaded ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group cursor-pointer py-4 border-b border-border last:border-b-0"
            >
              <h3 className="text-lg font-bold text-foreground group-hover:opacity-70 transition-opacity mb-1">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
