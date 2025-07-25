"use client";

import React from 'react';
import { getTools, projects } from '@/data/projects';
import ToolsList from '@/components/ToolsList';
import { useTranslation } from '@/hooks/useTranslation';

const ToolsPage = () => {
  const { t } = useTranslation();
  const { pages } = t;
  const tools = pages.tools;
  
  const toolsData = getTools(projects);
  const featuredTools = toolsData.filter(tool => tool.featured);
  const regularTools = toolsData.filter(tool => !tool.featured);

  return (
    <div className="min-h-screen w-full text-foreground page-background">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">/</span>
            <span className="text-primary">{tools.title}</span>
          </h1>
          <p className="text-secondary">{tools.subtitle}</p>
        </div>

        {/* Featured Tools */}
        {featuredTools.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">{tools.featuredTools}</span>
            </h2>
            <div className="w-full">
              <ToolsList tools={featuredTools} />
            </div>
          </div>
        )}

        {/* All Tools */}
        <div>
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-primary">#</span>
            <span className="text-primary">{tools.allTools}</span>
          </h2>
          <div className="w-full">
            <ToolsList tools={regularTools.length > 0 ? regularTools : toolsData} />
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-16 bg-muted border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">{tools.aboutTitle}</h3>
          <p className="text-secondary leading-relaxed">
            {tools.aboutDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage; 