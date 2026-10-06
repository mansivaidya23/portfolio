import { ArrowRight } from "lucide-react";
import type { Project } from "../data/projects";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { FieldTag } from "./ui/FieldTag";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-workspace border border-border bg-surface shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_6px_18px_rgba(32,33,36,0.08)]">
      <ProjectThumbnail type={project.thumbnail} />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <FieldTag variant={project.tagVariant}>{project.workspaceLabel}</FieldTag>

        <h3 className="mt-3 text-base font-semibold leading-snug text-primary">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-secondary">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.skillTags.map((tag) => (
            <FieldTag key={tag} variant="neutral">
              {tag}
            </FieldTag>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onSelect(project)}
          className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accentHover focus:outline-none focus-visible:underline"
        >
          View project
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </article>
  );
}
