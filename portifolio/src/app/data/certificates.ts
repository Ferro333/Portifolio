export interface Certificate {
  name: string;
  status: "concluído" | "em andamento";
}

export const certificates: Certificate[] = [
  { name: "Análise e Desenvolvimento de Sistemas", status: "concluído" },
  { name: "Engenharia de Software", status: "em andamento" },
  {
    name: "Cursos complementares de React, Next.js, TypeScript",
    status: "concluído",
  },
];
