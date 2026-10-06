import { educationDetail } from "../data/education";
import { FieldTag } from "./ui/FieldTag";
import { SectionHeading, SectionReveal } from "./ui/Section";

export function Education() {
  const focusTags = educationDetail.focus.split(" · ");

  return (
    <section id="education" className="section-shell bg-background">
      <div className="section-container">
        <SectionReveal>
          <SectionHeading title="Education" accent="blue" label="Academics" />
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <article className="content-panel">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  {educationDetail.institution}
                </h3>
                <p className="mt-1 text-base text-primary/90">
                  {educationDetail.degree}
                </p>
              </div>
              <FieldTag variant="blue">{educationDetail.status}</FieldTag>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {focusTags.map((tag) => (
                <FieldTag key={tag} variant="neutral">
                  {tag}
                </FieldTag>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
              {educationDetail.description}
            </p>
          </article>
        </SectionReveal>
      </div>
    </section>
  );
}
