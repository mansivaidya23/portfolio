import { Linkedin, Mail } from "lucide-react";
import { siteConfig } from "../data/site";
import { ButtonLink } from "./ui/Button";
import { SectionHeading, SectionReveal } from "./ui/Section";

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-surface/70">
      <div className="section-container">
        <SectionReveal>
          <div className="content-panel mx-auto max-w-2xl bg-accentSoft/35">
            <SectionHeading
              title="Let's connect"
              subtitle="Open to conversations about project and program management opportunities, collaborations, and operational challenges."
              accent="blue"
              className="mb-8"
            />

            <div className="flex flex-wrap items-center gap-2.5">
              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                variant="primary"
                className="w-auto"
              >
                <Mail size={16} strokeWidth={1.75} />
                Email me
              </ButtonLink>
              <ButtonLink
                href={siteConfig.linkedin}
                variant="secondary"
                external
                className="w-auto"
              >
                <Linkedin size={16} strokeWidth={1.75} />
                LinkedIn
              </ButtonLink>
              <ButtonLink
                href={siteConfig.resumeUrl}
                variant="ghost"
                className="w-auto px-5"
                download="Mansi_Vaidya_Project_Manager_Resume.pdf"
              >
                Download resume
              </ButtonLink>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="section-container">
        <p className="text-xs text-secondary">
          © {siteConfig.year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
