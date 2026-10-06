import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import type { MetricTone, Project } from "../data/projects";
import { FieldTag } from "./ui/FieldTag";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const sectionMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.28, ease: "easeOut" as const },
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-[60] cursor-default bg-[#202124]/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            aria-label="Close project details"
            onClick={onClose}
          />

          <div
            className="pointer-events-none fixed inset-0 z-[61] flex items-end justify-center p-0 sm:items-center sm:p-4"
            role="presentation"
          >
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="pointer-events-auto flex max-h-[92vh] w-full max-w-[840px] flex-col overflow-hidden rounded-t-workspace border border-border bg-white shadow-[0_16px_40px_rgba(32,33,36,0.18)] sm:rounded-workspace"
              style={{ backgroundColor: "#FFFFFF" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <div className="flex items-start justify-between border-b border-border bg-white px-5 py-4 sm:px-6">
                <div className="pr-6">
                  {project.modalSummary ? (
                    <>
                      <h2
                        id="project-modal-title"
                        className="text-lg font-semibold leading-snug text-primary sm:text-xl"
                      >
                        {project.title}
                      </h2>
                      {project.progressionLabel && (
                        <p className="mt-2 inline-block rounded-workspace border border-[#E8A838]/35 bg-[#FFF9EB] px-2 py-0.5 text-[11px] font-medium tracking-wide text-[#92400E]">
                          {project.progressionLabel}
                        </p>
                      )}
                      <div className="mt-2">
                        <FieldTag variant={project.tagVariant}>
                          {project.workspaceLabel}
                        </FieldTag>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-secondary">
                        {project.modalSummary}
                      </p>
                    </>
                  ) : (
                    <>
                      <FieldTag variant={project.tagVariant}>
                        {project.workspaceLabel}
                      </FieldTag>
                      <h2
                        id="project-modal-title"
                        className="mt-3 text-lg font-semibold leading-snug text-primary sm:text-xl"
                      >
                        {project.title}
                      </h2>
                      <p className="mt-1 text-xs text-secondary">
                        {project.category}
                      </p>
                    </>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-workspace p-1.5 text-secondary transition-colors hover:bg-background hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-8 overflow-y-auto bg-white px-5 py-6 sm:px-6 sm:py-8">
                {project.projectStory ? (
                  <ModalSection title="Project Story" delay={0.05}>
                    {project.projectStory.split("\n\n").map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </ModalSection>
                ) : (
                  <ModalSection title="The problem" delay={0.05}>
                    <p>{project.problem}</p>
                  </ModalSection>
                )}

                <ModalSection title="Approach" delay={0.1}>
                  {project.approachParagraph ? (
                    project.approachParagraph.split("\n\n").map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="mb-3 last:mb-0">
                        {highlightParagraph(paragraph, project.highlightTerms)}
                      </p>
                    ))
                  ) : (
                    <ul className="list-disc space-y-1.5 pl-5">
                      {project.approach.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </ModalSection>

                <ModalSection title="Tools & Methods" delay={0.15}>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <FieldTag key={tool} variant="neutral">
                        {tool}
                      </FieldTag>
                    ))}
                  </div>
                </ModalSection>

                <ModalSection title="Key Insights" delay={0.2}>
                  {project.keyInsightBullets ? (
                    <ul className="list-disc space-y-2 pl-5">
                      {project.keyInsightBullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.keyInsights}</p>
                  )}
                </ModalSection>

                {project.metricCallouts && project.metricCallouts.length > 0 && (
                  <motion.div
                    className="grid gap-3 sm:grid-cols-3"
                    initial={sectionMotion.initial}
                    animate={sectionMotion.animate}
                    transition={{ ...sectionMotion.transition, delay: 0.22 }}
                  >
                    {project.metricCallouts.map((metric) => (
                      <MetricCallout key={metric.label} {...metric} />
                    ))}
                  </motion.div>
                )}

                <ModalSection title="Outcome" delay={0.28}>
                  {project.outcome.includes("\n\n") ? (
                    project.outcome.split("\n\n").map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="mb-3 last:mb-0">
                        {highlightParagraph(paragraph, project.highlightTerms)}
                      </p>
                    ))
                  ) : (
                    <p>{highlightParagraph(project.outcome, project.highlightTerms)}</p>
                  )}
                </ModalSection>

                {project.proposedRecommendations && (
                  <ModalSection
                    title={
                      project.recommendationsHeading ?? "Proposed recommendations"
                    }
                    delay={0.32}
                  >
                    <p className="mb-3 rounded-workspace border border-[#E8A838]/30 bg-[#FFF9EB] px-3 py-2 text-xs text-secondary">
                      {project.recommendationsDisclaimer ??
                        "The following are analytical recommendations from the paper—not outcomes that were implemented on the program."}
                    </p>
                    <p>
                      {highlightParagraph(
                        project.proposedRecommendations,
                        project.highlightTerms,
                      )}
                    </p>
                  </ModalSection>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-border bg-white px-5 py-4 sm:px-6">
                {project.kpiDashboardUrl && (
                  <a
                    href={project.kpiDashboardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-workspace bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accentHover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Explore KPI Dashboard
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-workspace border border-border bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-background"
                >
                  Close
                </button>
              </div>
            </motion.article>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function MetricCallout({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: MetricTone;
}) {
  const styles: Record<MetricTone, string> = {
    blue: "border-accent/25 bg-tagBlue text-accent",
    coral: "border-[#E8836A]/35 bg-[#FCEFE8] text-[#B45309]",
    green: "border-[#6BAA75]/35 bg-tagGreen text-[#2F6B3A]",
  };

  return (
    <div
      className={`rounded-workspace border px-3 py-3 text-center ${styles[tone]}`}
    >
      <p className="text-[10px] font-medium uppercase tracking-wide opacity-80">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold tabular-nums">{value}</p>
    </div>
  );
}

function highlightParagraph(text: string, terms?: string[]): ReactNode {
  if (!terms?.length) return text;

  const sorted = [...terms].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    `(${sorted.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isTerm = sorted.some((t) => t.toLowerCase() === part.toLowerCase());
    if (!isTerm) return part;
    return (
      <span
        key={`${part}-${index}`}
        className="font-medium text-[#6D28D9]"
      >
        {part}
      </span>
    );
  });
}

function ModalSection({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      className="last:mb-0"
      initial={sectionMotion.initial}
      animate={sectionMotion.animate}
      transition={{ ...sectionMotion.transition, delay }}
    >
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-secondary">{children}</div>
    </motion.section>
  );
}
