"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { getCompleteApps, getSmallProjects, getBlogPosts, getTools } from '@/data';
import { useTranslation } from '@/hooks/useTranslation';
import CompleteAppsList from '@/components/CompleteAppsList';
import ToolsList from '@/components/ToolsList';
import BlogList from '@/components/BlogList';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const { pages, projects } = t;
  const projectsPage = pages.projects;

  // Add error handling and logging
  console.log('Projects data:', projects);
  console.log('Projects page data:', projectsPage);

  const completeApps = getCompleteApps(projects);
  const smallProjects = getSmallProjects(projects);
  const blogPosts = getBlogPosts(projects);
  const tools = getTools(projects);

  console.log('Complete apps:', completeApps);
  console.log('Small projects:', smallProjects);
  console.log('Blog posts:', blogPosts);
  console.log('Tools:', tools);

  // Fallback if data is not available
  if (!projectsPage || !projects) {
    return (
      <div className="min-h-screen w-full text-foreground page-background">
        <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-2 text-primary">/projects</h1>
          <p className="text-secondary">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full text-foreground page-background">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText
            text={`/${projectsPage.title}`}
            className="text-4xl font-bold mb-2 text-primary"
            type="fade"
            delay={0.2}
          />
          <AnimatedText
            text={projectsPage.subtitle}
            className="text-secondary"
            type="fade"
            delay={0.4}
          />
        </motion.div>

        {/* Complete Apps Section */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">{projectsPage.completeApps}</span>
            </h2>
            <div className="w-full">
              <CompleteAppsList apps={completeApps} />
            </div>
          </div>
        </AnimatedSection>

        {/* Small Projects Section */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">{projectsPage.smallProjects}</span>
            </h2>
            <div className="w-full">
              <CompleteAppsList apps={smallProjects} />
            </div>
          </div>
        </AnimatedSection>

        {/* Blog Posts Section */}
        <AnimatedSection direction="up" delay={0.5}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">{projectsPage.blogPosts}</span>
            </h2>
            <div className="w-full">
              <BlogList posts={blogPosts} />
            </div>
          </div>
        </AnimatedSection>

        {/* Tools Section */}
        <AnimatedSection direction="up" delay={0.6}>
          <div>
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">{projectsPage.tools}</span>
            </h2>
            <div className="w-full">
              <ToolsList tools={tools} />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ProjectsPage; 