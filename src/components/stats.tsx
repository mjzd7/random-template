const stats = [
  { value: "1.5+", label: "Years at Cisco" },
  { value: "8+", label: "Projects shipped" },
  { value: "3", label: "Startups" },
  { value: "10k+", label: "MRR" },
];

export function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-5xl md:text-6xl font-black tracking-tighter text-foreground leading-none">
            {stat.value}
          </p>
          <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
