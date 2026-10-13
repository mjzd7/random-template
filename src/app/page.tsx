import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { HowIBuild } from "@/components/how-i-build";
import { Experience } from "@/components/experience";
import { Writing } from "@/components/writing";
import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { MusicToggle } from "@/components/music-toggle";
import { BackgroundCanvas } from "@/components/background-canvas";

export default function Home() {
  return (
    <>
      <BackgroundCanvas />
      <div className="relative z-[2]">
        <Nav />
        <main>
          <Hero />
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <hr className="border-border" />
          </div>
          <Stats />
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <hr className="border-border" />
          </div>
          <Projects />
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <hr className="border-border" />
          </div>
          <Skills />
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <hr className="border-border" />
          </div>
          <HowIBuild />
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <hr className="border-border" />
          </div>
          <Experience />
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <hr className="border-border" />
          </div>
          <Writing />
          <Contact />
        </main>
        <CTA />
        <Footer />
        <MusicToggle />
      </div>
    </>
  );
}
