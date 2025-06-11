import React from 'react';
import ProjectCard from './ProjectCard';
import { type Project } from '@/data/projects';

interface ToolsListProps {
  tools: Project[];
  limit?: number;
}

const ToolsList: React.FC<ToolsListProps> = ({ tools, limit }) => {
  const displayTools = limit ? tools.slice(0, limit) : tools;
  
  return (
    <div className="flex flex-wrap gap-6 justify-start w-full">
      {displayTools.map((tool, index) => (
        <div key={index} className="h-[480px] w-[320px] flex-shrink-0">
          <ProjectCard 
            title={tool.title}
            description={tool.description}
            technologies={tool.technologies}
            liveLink={tool.liveLink || '#'}
            cachedLink={tool.cachedLink}
            theme={tool.theme as 'brown' | 'dark-green' | 'purple'}
            image={tool.image}
            buttonText="Try Tool"
          />
        </div>
      ))}
    </div>
  );
};

export default ToolsList; 