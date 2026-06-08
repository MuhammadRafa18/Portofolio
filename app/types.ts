export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Frontend' | 'Backend' | 'Full-Stack' | 'Web3';
  glowColor: 'blue' | 'purple' | 'cyan' | 'pink';
  stars?: number;
  forks?: number;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string };
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'DevOps & Tools';
  level: number; // 0-100
  color: string; // Tailwind glow border color or gradient text
  iconName: string; // Map to Lucide icon component dynamically
  description: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
  glowAccent: string;
}

export interface BentoItem {
  id: string;
  title: string;
  subtitle?: string;
  type: 'terminal' | 'stats' | 'timezone' | 'interactive' | 'bio';
  size: 'small' | 'medium' | 'large' | 'full';
}
