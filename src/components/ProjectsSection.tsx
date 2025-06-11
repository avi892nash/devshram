"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import ProjectsHeader from './ProjectsHeader';
import ProjectList from './ProjectList';

const ProjectsSection = () => {
  const router = useRouter();
  
  const handleViewAll = () => {
    router.push('/projects');
  };

  return (
    <div className="w-auto">
      <ProjectsHeader onViewAll={handleViewAll} />
      <div className="py-12">
        <div className="max-w-7xl">
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection; 