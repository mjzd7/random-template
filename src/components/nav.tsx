import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#tools" },
  { label: "How I Build", href: "#build" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-transparent">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a
          href="/"
          className="text-base font-bold tracking-tight text-foreground hover:opacity-70 transition-opacity"
        >
          Priyam Jain
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm px-4 py-2 rounded-full border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
