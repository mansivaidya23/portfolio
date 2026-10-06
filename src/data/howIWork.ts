export interface HowIWorkPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceInPractice {
  role: string;
  companyLabel: string;
  dates: string;
  summary: string;
  bullets: string[];
}

export const howIWorkIntro =
  "I clarify deliverables, align teams, and keep execution visible from planning through release.";

export const howIWorkPrinciples: HowIWorkPrinciple[] = [
  {
    number: "01",
    title: "Define the path",
    description:
      "Requirements, milestones, dependencies, and acceptance criteria.",
  },
  {
    number: "02",
    title: "Align the team",
    description: "Ownership, planning conversations, and stakeholder updates.",
  },
  {
    number: "03",
    title: "Keep delivery moving",
    description: "Scope, schedule, risk, issues, and timely decisions.",
  },
  {
    number: "04",
    title: "Improve the system",
    description: "Automation, documentation, and workflow refinement.",
  },
];

export const experienceInPractice: ExperienceInPractice = {
  role: "Project Coordinator",
  companyLabel: "Mantrakshar Technology Services",
  dates: "May 2022 – May 2024",
  summary:
    "Managed more than five web development projects from initiation through release, coordinating engineering, design, QA, and business stakeholders across concurrent workstreams.",
  bullets: [
    "Defined project requirements, deliverables, work plans, schedules, milestones, dependencies, and acceptance criteria.",
    "Facilitated sprint planning, progress reviews, task ownership, and follow-up actions using Agile/Scrum practices.",
    "Maintained delivery visibility across scope, timelines, resources, risks, issues, and change requests.",
    "Led issue triage, escalated blockers and tradeoffs, and presented recommended actions to support timely decisions.",
    "Improved workflows supporting more than 10,000 student records through automation, validation rules, and documentation controls.",
    "Prepared status updates, project documentation, and handoff materials to support adoption and consistent post-release execution.",
  ],
};
