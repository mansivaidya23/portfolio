import type { TagVariant } from "./tagVariants";

export type ProjectFilterId =
  | "all"
  | "analytics"
  | "operations"
  | "process"
  | "program";

export interface ProjectFilter {
  id: ProjectFilterId;
  label: string;
  variant: TagVariant;
}

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "All projects", variant: "neutral" },
  { id: "analytics", label: "Analytics", variant: "blue" },
  { id: "operations", label: "Operations", variant: "yellow" },
  { id: "process", label: "Process improvement", variant: "green" },
  { id: "program", label: "Program management", variant: "purple" },
];
