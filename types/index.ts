export type ProjectCategory = 
  | "cultura"
  | "turismo"
  | "marketing-territorial"
  | "projetos-estrategicos";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  client: string;
  year: string;
  context: string;
  challenge: string;
  strategy: string;
  result: string;
  tags: string[];
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  subject: string;
  message: string;
}


