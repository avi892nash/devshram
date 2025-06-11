export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  cachedLink?: string;
  githubLink?: string;
  figmaLink?: string;
  theme: string;
  image?: string;
  category: 'blog' | 'tool' | 'complete-app' | 'small-project';
  featured?: boolean;
}

export const projects: Project[] = [
  // Complete Apps
  {
    title: 'ChertNodes',
    description: 'Minecraft servers hosting',
    technologies: ['HTML', 'SCSS', 'Python', 'Flask'],
    liveLink: '#',
    cachedLink: '#',
    theme: 'brown',
    image: '/api/placeholder/280/160',
    category: 'complete-app',
    featured: true
  },
  {
    title: 'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz',
    technologies: ['CSS', 'Express', 'Node.js'],
    liveLink: '#',
    theme: 'purple',
    image: '/api/placeholder/280/160',
    category: 'complete-app',
    featured: true
  },
  {
    title: 'ProtectX',
    description: 'Discord anti-crash bot',
    technologies: ['React', 'Express', 'Discord.js', 'Node.js'],
    liveLink: '#',
    cachedLink: '#',
    theme: 'green',
    image: '/api/placeholder/280/160',
    category: 'complete-app',
    featured: true
  },
  {
    title: 'Kotik Bot',
    description: 'Multi-functional discord bot',
    technologies: ['HTML', 'CSS', 'JS'],
    liveLink: '#',
    theme: 'brown',
    image: '/api/placeholder/280/160',
    category: 'complete-app'
  },
  {
    title: 'Portfolio',
    description: "You're using it rn",
    technologies: ['Vue', 'TS', 'Less'],
    githubLink: '#',
    theme: 'dark',
    image: '/api/placeholder/280/160',
    category: 'complete-app'
  },

  // Small Projects
  {
    title: 'Bot boilerplate',
    description: 'Start creating scalable discord.js bot with typescript in seconds',
    technologies: ['Discord.js', 'TS', 'JS'],
    githubLink: '#',
    theme: 'brown',
    category: 'small-project'
  },
  {
    title: 'My blog',
    description: 'Front-end of my future blog website written in vue',
    technologies: ['VUE', 'CSS', 'JS'],
    githubLink: '#',
    theme: 'brown',
    category: 'small-project'
  },
  {
    title: 'Chess pro',
    description: 'Figma landing page about service for viewing chess tournaments',
    technologies: ['Figma'],
    figmaLink: '#',
    theme: 'brown',
    category: 'small-project'
  },

  // Blog Posts
  {
    title: 'Building Modern Web Apps',
    description: 'A comprehensive guide to building modern web applications with React and Next.js',
    technologies: ['React', 'Next.js', 'TypeScript'],
    liveLink: '#',
    theme: 'purple',
    category: 'blog',
    featured: true
  },
  {
    title: 'State Management in React',
    description: 'Understanding different state management solutions for React applications',
    technologies: ['React', 'Redux', 'Zustand'],
    liveLink: '#',
    theme: 'green',
    category: 'blog'
  },
  {
    title: 'TypeScript Best Practices',
    description: 'Essential TypeScript patterns and practices for better code quality',
    technologies: ['TypeScript', 'JavaScript'],
    liveLink: '#',
    theme: 'brown',
    category: 'blog'
  },

  // Tools
  {
    title: 'Code Formatter',
    description: 'A powerful code formatting tool for multiple programming languages',
    technologies: ['Node.js', 'CLI', 'TypeScript'],
    githubLink: '#',
    liveLink: '#',
    theme: 'green',
    category: 'tool',
    featured: true
  },
  {
    title: 'API Tester',
    description: 'Simple tool to test REST APIs with different HTTP methods',
    technologies: ['React', 'JavaScript', 'CSS'],
    githubLink: '#',
    liveLink: '#',
    theme: 'purple',
    category: 'tool'
  },
  {
    title: 'Color Palette Generator',
    description: 'Generate beautiful color palettes for your design projects',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: '#',
    liveLink: '#',
    theme: 'brown',
    category: 'tool'
  }
];

// Helper functions to filter projects
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getCompleteApps = (): Project[] => {
  return projects.filter(project => project.category === 'complete-app');
};

export const getSmallProjects = (): Project[] => {
  return projects.filter(project => project.category === 'small-project');
};

export const getBlogPosts = (): Project[] => {
  return projects.filter(project => project.category === 'blog');
};

export const getTools = (): Project[] => {
  return projects.filter(project => project.category === 'tool');
}; 