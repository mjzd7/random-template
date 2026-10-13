import { Github, Linkedin, Mail } from "lucide-react";

const tags = ["AI Systems", "Blockchain", "Full Stack", "Observability", "Backend"];

export function Hero() {
  return (
    <section className="pt-36 pb-16 max-w-6xl mx-auto px-6 md:px-10">
      <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <span className="w-5 h-px bg-muted-foreground/40 inline-block" />
        AI Product Engineer
      </p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h1 className="text-[72px] md:text-[96px] lg:text-[120px] font-black leading-[0.9] tracking-tighter text-foreground">
          Priyam
          <br />
          Jain.
        </h1>
        <div className="md:max-w-[240px] pb-2 shrink-0 space-y-3 text-sm text-muted-foreground">
          <p className="text-foreground font-medium text-base leading-snug">
            I build AI systems and the infrastructure around them. At Cisco.
            Previously, a few startups.
          </p>
          <p>Bengaluru, India</p>
          <p className="font-medium text-foreground">Cisco · SDE2</p>
          <div className="flex items-center gap-3 pt-1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/priyam-jain-2002"
              className="hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/jain-priyam"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:priyamjain1181@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-4 py-1.5 rounded-full border border-border text-muted-foreground bg-secondary hover:border-foreground/30 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
