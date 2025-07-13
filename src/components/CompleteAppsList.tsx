import React from 'react';
import ProjectCard from './ProjectCard';
import { type Project } from '@/data/projects';

interface CompleteAppsListProps {
  apps: Project[];
  limit?: number;
}

const CompleteAppsList: React.FC<CompleteAppsListProps> = ({ apps, limit }) => {
  const displayApps = limit ? apps.slice(0, limit) : apps;
  
  return (
    <div className="flex flex-wrap gap-6 justify-start w-full">
      {displayApps.map((app, index) => (
        <div key={index} className="h-[480px] w-[320px] flex-shrink-0">
          <ProjectCard 
            title={app.title}
            description={app.description}
            technologies={app.technologies}
            liveLink={app.liveLink || '#'}
            cachedLink={app.cachedLink}
            theme={app.theme as 'brown' | 'dark-green' | 'purple' | 'green' | 'dark'}
            image={app.image}
            buttonText="View Project"
          />
        </div>
      ))}
    </div>
  );
};

export default CompleteAppsList; 