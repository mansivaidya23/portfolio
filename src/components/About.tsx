import { siteConfig } from "../data/site";
import { SectionHeading, SectionReveal } from "./ui/Section";

export function About() {
  return (
    <section id="about" className="section-shell bg-surface/70">
      <div className="section-container">
        <SectionReveal>
          <SectionHeading title="About me" accent="green" label="Background" />
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <article className="content-panel">
            <div className="space-y-4 text-sm leading-relaxed text-secondary sm:text-base">
              {siteConfig.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </article>
        </SectionReveal>
      </div>
    </section>
  );
}
