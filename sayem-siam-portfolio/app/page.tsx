import {
  Hero,
  About,
  Skills,
  Education,
  Publications,
  Projects,
  Achievements,
  Experience,
  Contact,
} from "@/src/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Publications />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}
