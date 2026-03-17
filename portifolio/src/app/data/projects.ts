export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  technologies: string[];
  
  githubUrl: string;
  deployUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Projeto java",
    description:
      "Aplicação para projeto academico",
    technologies: ["Next.js", "TypeScript", "JavaScript", "Java"],
    
    githubUrl: "https://github.com/Ferro333/Projeto-Java",
    deployUrl: "https://exemplo.vercel.app",
  },
  {
    id: "2",
    name: "Projeto simples utilizando Docker Compose com uma API Node.js (Express) e banco de dados PostgreSQL.",
    description:
      "Projeto academico utilizando Docker Compose",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"	],
    
    githubUrl: "https://github.com/Ferro333/CP4-Docker-compose",
    deployUrl: "https://dashboard-exemplo.vercel.app",
  },
  {
    id: "3",
    name: "DimDim Customers & Transactions (Spring Boot + PostgreSQL)",
    description:
      "API simples com duas entidades relacionadas (customers e transactions) para ser usada no desafio de Azure DevOps (Boards/Repos/Pipelines).",
    technologies: ["Java", "Dockerfile"],
    
    githubUrl: "https://github.com/Ferro333/CP6-Devops",
    deployUrl: "https://landing-exemplo.vercel.app",
  },
  
];
