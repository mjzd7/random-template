import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h2 className="text-[56px] md:text-[80px] font-black leading-none tracking-tighter">
          Let&apos;s build
          <br />
          something.
        </h2>
        <div className="flex flex-col gap-3 shrink-0">
          <a
            href="mailto:priyamjain1181@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
          >
            Email me directly
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/priyam-jain-2002"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/jain-priyam"
              className="text-background/60 hover:text-background transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
