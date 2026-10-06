import type { ReactNode } from "react";
import type { TagVariant } from "../../data/tagVariants";

const variantClasses: Record<TagVariant, string> = {
  blue: "bg-tagBlue text-primary",
  purple: "bg-tagPurple text-primary",
  yellow: "bg-tagYellow text-primary",
  green: "bg-tagGreen text-primary",
  red: "bg-tagRed text-primary",
  neutral: "bg-background text-secondary border border-border",
};

interface FieldTagProps {
  children: ReactNode;
  variant?: TagVariant;
  className?: string;
  as?: "span" | "button";
  active?: boolean;
  onClick?: () => void;
}

export function FieldTag({
  children,
  variant = "neutral",
  className = "",
  as = "span",
  active = false,
  onClick,
}: FieldTagProps) {
  const base =
    "inline-flex items-center rounded-tag px-2.5 py-1 text-xs font-medium leading-none";
  const activeRing =
    active && as === "button"
      ? "ring-1 ring-accent/30 ring-offset-1 ring-offset-background"
      : "";

  if (as === "button") {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} ${variantClasses[variant]} ${activeRing} transition-all hover:brightness-[0.97] active:scale-[0.98] ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
