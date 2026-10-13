"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent! I'll get back to you soon.");
    form.reset();
  };

  return (
    <section id="contact" className="bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-6">
          Get in touch
        </p>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-6">
            <h2 className="text-[48px] md:text-[56px] font-black tracking-tighter leading-[0.9] text-foreground">
              Say hello.
              <br />
              <span className="text-foreground/25">I actually reply.</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              If you have something to build, something to ask, or just want to
              talk — send a message. No forms that go nowhere.
            </p>
            <div className="space-y-2 pt-2">
              <a
                href="mailto:priyamjain1181@gmail.com"
                className="flex items-center gap-2 text-sm text-foreground font-medium hover:opacity-60 transition-opacity group w-fit"
              >
                priyamjain1181@gmail.com
                <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-4 pt-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/priyam-jain-2002"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/jain-priyam"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border p-8 bg-secondary/10">
            <form onSubmit={handleSubmit} className="space-y-5 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-80 transition-opacity disabled:opacity-40 w-full justify-center"
              >
                Send message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
