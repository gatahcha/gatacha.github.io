import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <section id="hero">  {/* ← ADD THIS ID */}
        <Hero />
      </section>
      
      <section id="skills">        {/* ← ADD THIS ID */}
        <Skills />
      </section>
      
      <section id="projects">      {/* ← ADD THIS ID */}
        <Projects />
      </section>
      
      <section id="connect">       {/* ← ADD THIS ID */}
        <Contact />
      </section>
    </>
  );
}//