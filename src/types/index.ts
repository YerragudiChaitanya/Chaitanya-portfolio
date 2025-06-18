export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  date: string;
  category: 'Web Development' | 'Machine Learning' | 'AI/Computer Vision' | 'IoT/Embedded' | 'Full Stack';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  projects?: string[];
  technologies?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  platform: string;
  date?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description?: string;
}