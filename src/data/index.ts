import data from '../translations/en.json';

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

export interface ContactLink {
  type: 'discord' | 'github' | 'linkedin' | 'email';
  href: string;
  title: string;
  displayText: string;
}

export interface Personal {
  name: string;
  title: string;
  location: string;
  description: string;
  passion: string;
  image: string;
}

export interface HomeContent {
  title: {
    main: string;
    highlight1: string;
    continuation: string;
    line2: string;
    highlight2: string;
  };
  subtitle: string;
  subtitle2: string;
  currentWork: {
    status: string;
    project: string;
  };
}

export interface Quote {
  text: string;
  author: string;
}

export interface Skills {
  languages: string[];
  databases: string[];
  frameworks: string[];
  tools: string[];
  other: string[];
}

export interface Contacts {
  message: string;
  links: ContactLink[];
}

export interface Pages {
  'about-me': {
    title: string;
    subtitle: string;
    greeting: string;
    intro1: string;
    intro2: string;
    skillsTitle: string;
    funFactsTitle: string;
    funFacts: string[];
    readMore: string;
  };
  blog: {
    title: string;
    subtitle: string;
    featuredPosts: string;
    allPosts: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  tools: {
    title: string;
    subtitle: string;
    featuredTools: string;
    allTools: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    supportTitle: string;
    supportNumber: string;
    messageTitle: string;
    allMedia: string;
  };
  projects: {
    title: string;
    subtitle: string;
    completeApps: string;
    smallProjects: string;
    blogPosts: string;
    tools: string;
    liveButton: string;
    cachedButton: string;
    githubButton: string;
    figmaButton: string;
  };
}

export interface SiteData {
  personal: Personal;
  home: HomeContent;
  quote: Quote;
  skills: Skills;
  contacts: Contacts;
  pages: Pages;
  projects: Project[];
}

// Export the fallback data with proper typing (used for static generation)
export const siteData: SiteData = data as SiteData;

// Helper functions for projects that work with translated data
export const getProjectsByCategory = (projects: Project[], category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (projects: Project[]): Project[] => {
  return projects.filter(project => project.featured);
};

export const getCompleteApps = (projects: Project[]): Project[] => {
  return projects.filter(project => project.category === 'complete-app');
};

export const getSmallProjects = (projects: Project[]): Project[] => {
  return projects.filter(project => project.category === 'small-project');
};

export const getBlogPosts = (projects: Project[]): Project[] => {
  return projects.filter(project => project.category === 'blog');
};

export const getTools = (projects: Project[]): Project[] => {
  return projects.filter(project => project.category === 'tool');
};

// Export individual sections for easy access (fallback data)
export const { personal, home, quote, skills, contacts, pages, projects } = siteData; 