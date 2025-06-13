"use client";

import React from 'react';
import { getTools, projects } from '@/data/projects';
import ToolsList from '@/components/ToolsList';

const ToolsPage = () => {
  const tools = getTools(projects);
  const featuredTools = tools.filter(tool => tool.featured);
  const regularTools = tools.filter(tool => !tool.featured);

  return (
    <div className="min-h-screen w-full bg-lightBackground text-foreground">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">/</span>
            <span className="text-primary">tools</span>
          </h1>
          <p className="text-secondary">Utilities and tools I&apos;ve built</p>
        </div>

        {/* Featured Tools */}
        {featuredTools.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">featured-tools</span>
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
            <span className="text-primary">all-tools</span>
          </h2>
          <div className="w-full">
            <ToolsList tools={regularTools.length > 0 ? regularTools : tools} />
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-16 bg-muted border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">About These Tools</h3>
          <p className="text-secondary leading-relaxed">
            These are various tools and utilities I&apos;ve developed to solve common development problems 
            or to experiment with new technologies. Each tool is designed to be simple, effective, 
            and easy to use. Feel free to try them out and check the source code if you&apos;re interested 
            in how they work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage; 