"use client";

import React from 'react';
import { getBlogPosts, projects } from '@/data/projects';
import BlogList from '@/components/BlogList';
import { useTranslation } from '@/hooks/useTranslation';

const BlogPage = () => {
  const { t } = useTranslation();
  const { pages } = t;
  const blog = pages.blog;
  
  const blogPosts = getBlogPosts(projects);
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen w-full text-foreground page-background">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">/</span>
            <span className="text-primary">{blog.title}</span>
          </h1>
          <p className="text-secondary">{blog.subtitle}</p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">{blog.featuredPosts}</span>
            </h2>
            <div className="w-full">
              <BlogList posts={featuredPosts} />
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-primary">#</span>
            <span className="text-primary">{blog.allPosts}</span>
          </h2>
          <div className="w-full">
            <BlogList posts={regularPosts.length > 0 ? regularPosts : blogPosts} />
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-16 bg-muted border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">{blog.aboutTitle}</h3>
          <p className="text-secondary leading-relaxed">
            {blog.aboutDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 