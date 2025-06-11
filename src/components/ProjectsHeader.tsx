"use client";

import React from 'react';

interface ProjectsHeaderProps {
  onViewAll?: () => void;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ onViewAll }) => (
  <div className="flex justify-between items-center mb-8 relative">
    {/* Title Section */}
    <div className="flex items-center">
      <h1 className="text-4xl font-bold text-white">
                    <span className="text-primary">#</span>
        <span className="text-foreground">projects</span>
      </h1>
      
      {/* Horizontal Line */}
              <div className="ml-6 flex-1 h-px bg-primary min-w-[200px] max-w-[400px]"></div>
    </div>
    
    {/* View All Button */}
    <div 
              className="flex items-center gap-2 text-white px-4 py-2 rounded hover:bg-primary/10 transition-colors cursor-pointer"
      onClick={onViewAll}
    >
      <span>View all</span>
              <span className="text-primary">~~&gt;</span>
    </div>
  </div>
);

export default ProjectsHeader; 