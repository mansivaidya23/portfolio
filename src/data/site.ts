export const siteConfig = {
  name: "Mansi Vaidya",
  title: "Project and Program Management. TPM . Operations . Data Analytics",
  location: "San Jose, California",
  intro:
    "I organize complex work into clear plans, measurable outcomes, and cross-functional alignment, combining product thinking, program execution, and analytics to move initiatives from idea to delivery.",
  aboutParagraphs: [
    "I enjoy making complex things feel more manageable whether that means coordinating a project, improving an operational process, or turning data into a clear next step.",
    "I'm currently pursuing my M.S. in Engineering Management at San José State University, where I've developed a strong foundation in project management, analytics, and operational strategy. Through academic and team-based projects, I've worked across web development, logistics, process optimization, and data-driven decision-making.",
    "What I enjoy most is bringing people, timelines, and information together to move a project forward. I like understanding the problem, creating structure, communicating clearly, and finding practical ways to improve how work gets done.",
    "I'm especially interested in project and program management roles focused on operational challenges, process improvement, and structured execution. My toolkit includes Agile methodologies, stakeholder management, scheduling, risk management, SQL, Tableau, Power BI, and workflow optimization.",
  ],
  email: "mansimohan.vaidya@outlook.com",
  linkedin: "https://www.linkedin.com/in/mansi-vaidya-12b080189/",
  resumeUrl: "/Mansi_Vaidya_Project_Manager_Resume.pdf",
  year: 2026,
};

export type NavLink = {
  label: string;
  href: string;
  sectionId?: string;
  isResume?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Experience", href: "#how-i-work", sectionId: "how-i-work" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
  { label: "Resume", href: "#resume", isResume: true },
];

export const sectionIds = [
  "about",
  "projects",
  "how-i-work",
  "education",
  "contact",
] as const;
