export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean; // For NDA/Enterprise projects
  category: 'Full Stack' | 'Mobile' | 'Blockchain' | 'Legacy' | 'AI';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillItem {
  name: string;
  iconSlug: string; // Slug for simpleicons.org
  color?: string; // Optional override color
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}