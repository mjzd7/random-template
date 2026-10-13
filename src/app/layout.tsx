import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/toaster";
import favicon from "@/public/favicon.svg";

export const metadata: Metadata = {
  title: "Priyam Jain — AI Product Engineer",
  description:
    "Priyam Jain is an AI Product Engineer at Cisco, Bengaluru. Builds AI systems, backend infrastructure, and developer tooling.",
  keywords: [
    "Priyam Jain",
    "AI Engineer",
    "AI Product Engineer",
    "Cisco",
    "Bengaluru",
    "India",
    "Software Engineer",
    "LangChain",
    "RAG",
    "Backend",
    "Full Stack",
    "Observability",
  ],
  authors: [{ name: "Priyam Jain", url: "https://portfolio-83027.web.app" }],
  creator: "Priyam Jain",
  openGraph: {
    title: "Priyam Jain — AI Product Engineer",
    description:
      "Priyam Jain is an AI Product Engineer at Cisco, Bengaluru. Builds AI systems, backend infrastructure, and developer tooling.",
    url: "https://portfolio-83027.web.app",
    siteName: "Priyam Jain",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@_priyam_jain",
    creator: "@_priyam_jain",
    title: "Priyam Jain — AI Product Engineer",
    description:
      "AI Product Engineer at Cisco. Building AI systems, backend services, and the infrastructure around them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('theme') || 'light';
                if (theme === 'system') {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
