import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading, SectionReveal } from "./ui/Section";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-shell bg-surface/70">
      <div className="section-container">
        <SectionReveal>
          <SectionHeading title="Featured projects" accent="blue" label="Work" />
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.04}>
              <ProjectCard project={project} onSelect={setSelected} />
            </SectionReveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
