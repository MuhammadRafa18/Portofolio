export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Frontend' | 'Backend' | 'Full-Stack' | 'Web3';
  glowColor: 'blue' | 'purple' | 'cyan' | 'pink';
  achievements: [];
  stars?: number;
  forks?: number;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string };
   mockupImages?: {   
    src: string;
    label: string;
  }[];
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'DevOps & Tools';
  level: number; 
  color: string; 
  iconName: string; 
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


