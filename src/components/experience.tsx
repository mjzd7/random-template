const experiences = [
  {
    company: "Cisco",
    role: "Software Engineer 2",
    period: "Aug 2024 → Now",
    description:
      "Building AI-assisted tooling and intelligence systems used in real operations. Also work on the observability layer — metrics, tracing, alerting — and the backend services that hold everything together.",
  },
  {
    company: "Cisco",
    role: "Software Engineering Intern",
    period: "Jan 2024 → Aug 2024",
    description:
      "Joined to work on scoped features. Ended up shipping things that stayed in production. Learned that the gap between a working prototype and something people actually rely on is mostly about care, not cleverness.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-10">
        Experience
      </p>
      <div className="space-y-0">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 py-12 border-b border-border last:border-b-0"
          >
            <div className="flex-1">
              <p className="text-xs text-muted-foreground font-mono mb-2">{exp.company}</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">{exp.role}</h3>
              <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
                {exp.description}
              </p>
            </div>
            <p className="text-3xl font-black tracking-tight text-foreground/15 md:text-right shrink-0 md:pl-12 tabular-nums leading-tight">
              {exp.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
