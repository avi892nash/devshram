"use client";

import React from 'react';
import { getCompleteApps, getSmallProjects, getBlogPosts, getTools, type Project } from '@/data/projects';

const getThemeClasses = (theme: string) => {
  switch (theme) {
    case 'brown':
      return 'bg-[#2a1f1a] border-[#4a3426]';
    case 'purple':
      return 'bg-[#2a1a3a] border-[#4a2a5a]';
    case 'green':
      return 'bg-[#1a2a1a] border-[#2a4a2a]';
    case 'dark':
      return 'bg-[#1a1a1a] border-[#3a3a3a]';
    default:
      return 'bg-[#2a1f1a] border-[#4a3426]';
  }
};

const ProjectCard = ({ project, hasImage = false }: { project: Project, hasImage?: boolean }) => (
  <div className={`rounded-lg border overflow-hidden ${getThemeClasses(project.theme)}`}>
    {hasImage && (
      <div className="h-40 bg-[#2a1f1a] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background"></div>
        <div className="relative z-10 text-foreground text-lg font-bold">{project.title}</div>
      </div>
    )}
    
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech: string, index: number) => (
          <span key={index} className="text-secondary text-sm">
            {tech}
          </span>
        ))}
      </div>
      
      <h3 className="text-foreground text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-secondary text-sm mb-4">{project.description}</p>
      
      <div className="flex gap-3">
        {project.liveLink && (
          <button className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors text-sm">
            Live ⟷
          </button>
        )}
        {project.cachedLink && (
          <button className="px-4 py-2 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-colors text-sm">
            Cached ⚡
          </button>
        )}
        {project.githubLink && (
          <button className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors text-sm">
            Github ⟷
          </button>
        )}
        {project.figmaLink && (
          <button className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors text-sm">
            Figma ⟷
          </button>
        )}
      </div>
    </div>
  </div>
);

const ProjectsPage = () => {
  const completeApps = getCompleteApps();
  const smallProjects = getSmallProjects();
  const blogPosts = getBlogPosts();
  const tools = getTools();

  return (
    <div className="min-h-screen w-full bg-[#1a1611] text-foreground">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
                      <span className="text-primary">/</span>
          <span className="text-primary">projects</span>
          </h1>
                      <p className="text-secondary">All my work in one place</p>
        </div>

        {/* Complete Apps Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-primary">#</span>
            <span className="text-primary">complete-apps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completeApps.map((project, index) => (
              <ProjectCard key={index} project={project} hasImage={true} />
            ))}
          </div>
        </div>

        {/* Small Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-primary">#</span>
            <span className="text-primary">small-projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallProjects.map((project, index) => (
              <ProjectCard key={index} project={project} hasImage={false} />
            ))}
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-primary">#</span>
            <span className="text-primary">blog-posts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((project, index) => (
              <ProjectCard key={index} project={project} hasImage={true} />
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-primary">#</span>
            <span className="text-primary">tools</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((project, index) => (
              <ProjectCard key={index} project={project} hasImage={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 