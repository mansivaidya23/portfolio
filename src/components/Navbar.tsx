import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, sectionIds, siteConfig } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  const linkHref = (link: (typeof navLinks)[number]) => {
    if (link.isResume) return siteConfig.resumeUrl;
    return link.href;
  };

  const linkIsExternal = (link: (typeof navLinks)[number]) =>
    Boolean(
      link.isResume &&
        siteConfig.resumeUrl !== "#" &&
        !siteConfig.resumeUrl.startsWith("#"),
    );

  const isLinkActive = (link: (typeof navLinks)[number]) =>
    link.sectionId !== undefined && activeSection === link.sectionId;

  const linkClass = (link: (typeof navLinks)[number]) => {
    const active = isLinkActive(link);
    return [
      "rounded-tag px-2 py-1 text-sm transition-colors",
      active
        ? "bg-accentSoft font-medium text-accent"
        : "text-secondary hover:bg-background hover:text-primary",
    ].join(" ");
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-sm transition-colors ${
        scrolled
          ? "border-border bg-surface/95 shadow-card"
          : "border-transparent bg-background/90"
      }`}
    >
      <nav
        className="section-container flex h-14 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-sm font-semibold text-primary"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {siteConfig.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={linkHref(link)}
                target={linkIsExternal(link) ? "_blank" : undefined}
                rel={linkIsExternal(link) ? "noopener noreferrer" : undefined}
                className={linkClass(link)}
                aria-current={isLinkActive(link) ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-workspace p-2 text-secondary hover:bg-background md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-surface md:hidden">
          <ul className="section-container flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={linkHref(link)}
                  target={linkIsExternal(link) ? "_blank" : undefined}
                  rel={linkIsExternal(link) ? "noopener noreferrer" : undefined}
                  onClick={handleNavClick}
                  className={`block ${linkClass(link)}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
