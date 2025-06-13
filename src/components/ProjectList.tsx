import React from 'react';
import ProjectCard from './ProjectCard';
import { getFeaturedProjects, projects } from '@/data/projects';

const ProjectList = () => {
  const featuredProjects = getFeaturedProjects(projects);
  
  return (
    <div className="flex flex-wrap gap-6 justify-start w-full">
      {featuredProjects.slice(0, 3).map((project, index) => (
        <div key={index} className="h-[480px] w-[320px] flex-shrink-0">
          <ProjectCard 
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink || '#'}
            cachedLink={project.cachedLink}
            theme={project.theme as 'brown' | 'dark-green' | 'purple'}
            image={project.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectList; 