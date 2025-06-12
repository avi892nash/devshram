"use client";

import React from 'react';
import { getBlogPosts } from '@/data/projects';
import BlogList from '@/components/BlogList';

const BlogPage = () => {
  const blogPosts = getBlogPosts();
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen w-full bg-lightBackground text-foreground">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">/</span>
            <span className="text-primary">blog</span>
          </h1>
          <p className="text-secondary">My thoughts on development</p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">featured-posts</span>
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
            <span className="text-primary">all-posts</span>
          </h2>
          <div className="w-full">
            <BlogList posts={regularPosts.length > 0 ? regularPosts : blogPosts} />
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-16 bg-muted border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">About This Blog</h3>
          <p className="text-secondary leading-relaxed">
            Welcome to my development blog where I share insights, tutorials, and thoughts about 
            software development, web technologies, and programming best practices. Here you&apos;ll find 
            articles covering various topics from frontend frameworks to backend architectures, 
            development workflows, and emerging technologies in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 