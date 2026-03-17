export type SkillCategory = "frontend" | "backend" | "database" | "tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skillCategories: Record<
  SkillCategory,
  { label: string; skills: string[] }
> = {
  frontend: {
    label: "Front-end",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  backend: {
    label: "Back-end",
    skills: ["Node.js", "APIs REST", "Java / Spring Boot"],
  },
  database: {
    label: "Banco de dados",
    skills: ["MySQL", "PostgreSQL", "Oracle"],
  },
  tools: {
    label: "Ferramentas",
    skills: ["Git", "GitHub", "Figma", "Docker", "Azure DevOps"],
  },
};
