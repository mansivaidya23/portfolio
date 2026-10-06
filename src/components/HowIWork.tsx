import {
  experienceInPractice,
  howIWorkIntro,
  howIWorkPrinciples,
} from "../data/howIWork";
import { SectionHeading, SectionReveal } from "./ui/Section";

export function HowIWork() {
  return (
    <section id="how-i-work" className="section-shell bg-background">
      <div className="section-container">
        <SectionReveal>
          <SectionHeading title="Experience" accent="blue" className="mb-10" />
        </SectionReveal>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <SectionReveal className="order-2 min-w-0 lg:order-1 lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">
              How I work
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              {howIWorkIntro}
            </p>

            <ol className="relative mt-6 space-y-0 border-l border-border/80 pl-4">
              {howIWorkPrinciples.map((step) => (
                <li key={step.number} className="relative pb-5 last:pb-0">
                  <span
                    className="absolute -left-4 top-0.5 h-2 w-2 -translate-x-1/2 rounded-full bg-accent/70"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold text-primary">
                    <span className="tabular-nums text-accent">{step.number}</span>
                    <span className="text-secondary"> — </span>
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-secondary">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </SectionReveal>

          <SectionReveal
            delay={0.06}
            className="order-1 min-w-0 lg:order-2 lg:col-span-3"
          >
            <article className="rounded-workspace border border-border bg-surface px-5 py-6 shadow-card sm:px-7 sm:py-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-4">
                <div>
                  <p className="text-lg font-semibold text-primary sm:text-xl">
                    {experienceInPractice.role}
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary/80">
                    {experienceInPractice.companyLabel}
                  </p>
                </div>
                <p className="text-xs font-medium tabular-nums text-secondary">
                  {experienceInPractice.dates}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-secondary sm:text-[15px]">
                {experienceInPractice.summary}
              </p>
              <ul className="mt-5 space-y-2.5">
                {experienceInPractice.bullets.map((item) => (
                  <li
                    key={item.slice(0, 48)}
                    className="relative pl-4 text-sm leading-relaxed text-secondary before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
