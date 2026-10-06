import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { TagVariant } from "../../data/tagVariants";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.42, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionBlock({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

const accentBar: Record<TagVariant, string> = {
  blue: "bg-accent",
  purple: "bg-accent/70",
  yellow: "bg-tagYellow",
  green: "bg-tagGreen",
  red: "bg-tagRed",
  neutral: "bg-border",
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  accent?: TagVariant;
  label?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
  accent = "blue",
  label,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="mb-3 flex items-center gap-2.5">
        <span
          className={`h-2 w-2 shrink-0 rounded-full ${accentBar[accent]}`}
          aria-hidden
        />
        {label && (
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-secondary">
            {label}
          </span>
        )}
      </div>
      <div className={`mb-3 h-0.5 w-12 rounded-full ${accentBar[accent]}`} />
      <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
