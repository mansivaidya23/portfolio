import { ArrowRight } from "lucide-react";
import { siteConfig } from "../data/site";
import { ButtonLink } from "./ui/Button";
import { SectionReveal } from "./ui/Section";

export function Hero() {
  return (
    <section className="section-shell border-b border-border/60 bg-background pt-12 sm:pt-14">
      <div className="section-container">
        <SectionReveal>
          <div className="max-w-3xl">
            <p className="text-sm text-secondary">{siteConfig.location}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {siteConfig.name}
            </h1>
            <p className="mt-3 text-base font-medium text-primary/90 sm:text-lg">
              {siteConfig.title}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary">
              {siteConfig.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects" variant="primary">
                View projects
                <ArrowRight size={15} strokeWidth={1.75} />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.resumeUrl}
                variant="secondary"
                external
              >
                Resume
              </ButtonLink>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
