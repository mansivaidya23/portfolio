import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  id?: string;
  download?: string | boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent/90 text-white hover:bg-accentHover border border-transparent shadow-card",
  secondary:
    "border border-border bg-surface text-primary hover:border-accent/25 hover:bg-accentSoft",
  ghost:
    "border border-transparent bg-transparent text-accent hover:bg-accentSoft/80",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  id,
  download,
}: ButtonLinkProps) {
  return (
    <a
      id={id}
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-button px-5 py-2.5 text-sm font-medium transition-all duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
