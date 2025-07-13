import React from 'react';
import ProjectCard from './ProjectCard';
import { type Project } from '@/data/projects';

interface BlogListProps {
  posts: Project[];
  limit?: number;
}

const BlogList: React.FC<BlogListProps> = ({ posts, limit }) => {
  const displayPosts = limit ? posts.slice(0, limit) : posts;
  
  return (
    <div className="flex flex-wrap gap-6 justify-start w-full">
      {displayPosts.map((post, index) => (
        <div key={index} className="h-[480px] w-[320px] flex-shrink-0">
          <ProjectCard 
            title={post.title}
            description={post.description}
            technologies={post.technologies}
            liveLink={post.liveLink || '#'}
            cachedLink={post.cachedLink}
            theme={post.theme as 'brown' | 'dark-green' | 'purple' | 'green' | 'dark'}
            image={post.image}
            buttonText="Read"
          />
        </div>
      ))}
    </div>
  );
};

export default BlogList; 