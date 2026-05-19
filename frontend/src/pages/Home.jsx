import { Hero } from "../sections/Hero";
import { FeaturedProjects } from "../sections/FeaturedProjects";
import { Expertise } from "../sections/Expertise";
import { Experience } from "../sections/Experience";
import { About } from "../sections/About";
import { WritingTeaser } from "../sections/WritingTeaser";
import { Contact } from "../sections/Contact";

export default function Home() {
  return (
    <main data-testid="page-home">
      <Hero />
      <FeaturedProjects />
      <Expertise />
      <Experience />
      <About />
      <WritingTeaser />
      <Contact />
    </main>
  );
}
