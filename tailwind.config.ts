import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        secondary: "hsl(var(--secondary))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      fontFamily: {
        sans: ["GeistSans", "GeistSans Fallback", "system-ui", "sans-serif"],
        mono: ["GeistMono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
