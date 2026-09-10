export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  categories: Array<'Java' | 'Spring Boot' | 'Full Stack' | 'AI'>;
  description: string;
  featured?: boolean;
  technologies: string[];
  features: string[];
  backend?: string[];
  security?: string[];
  testing?: {
    count: number;
    headline: string;
    description: string;
  };
  deployment?: string[];
  architecture?: {
    nodes: {
      name: string;
      role: string;
      description: string;
    }[];
  };
  problem?: string;
  solution?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  technologies: string[];
  responsibilities: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  details?: string[];
}
