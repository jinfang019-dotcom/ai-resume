export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PORTFOLIO = 'portfolio',
}