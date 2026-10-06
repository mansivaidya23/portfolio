export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Project & Program Management",
    skills: [
      "Project Planning",
      "Scheduling",
      "Stakeholder Management",
      "Risk Analysis",
      "Resource Planning",
      "Cross-functional Coordination",
      "Project Documentation",
      "Process Improvement",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Python",
      "SQL",
      "Microsoft Excel",
      "Tableau",
      "Minitab",
      "Data Visualization",
      "Statistical Analysis",
      "Forecasting",
      "KPI Analysis",
    ],
  },
  {
    title: "Operations & Process Improvement",
    skills: [
      "Lean",
      "Six Sigma",
      "DMAIC",
      "Capacity Planning",
      "MRP",
      "Process Optimization",
      "Supply Chain Analysis",
      "Workflow Analysis",
    ],
  },
  {
    title: "Tools & Technology",
    skills: [
      "Microsoft Excel",
      "Tableau",
      "Minitab",
      "ProModel",
      "Python",
      "SQL",
      "GitHub",
      "HTML/CSS",
    ],
  },
];
