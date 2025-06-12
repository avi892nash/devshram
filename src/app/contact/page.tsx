"use client";

import React from 'react';
import { useLinks } from '@/components/Links';

const ContactPage = () => {
  const socialLinks = useLinks({ 
    width: 32, 
    height: 32, 
    fill: "fill-secondary",
    showText: true,
    textClassName: "text-secondary text-base",
    linkClassName: "hover:opacity-80 transition-opacity duration-300",
    itemClassName: "flex items-center gap-3"
  });

  const contactLinksWithText = useLinks({ 
    width: 24, 
    height: 24, 
    fill: "fill-secondary",
    showText: true,
    textClassName: "text-secondary text-base",
    linkClassName: "hover:opacity-80 transition-opacity duration-300",
    itemClassName: "flex items-center gap-3"
  });

  return (
    <div className="min-h-screen w-full bg-lightBackground text-foreground">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">/</span>
            <span className="text-primary">contacts</span>
          </h1>
          <p className="text-secondary">Who am I?</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Description */}
          <div className="space-y-6">
            <p className="text-secondary leading-relaxed text-lg">
              I&apos;m interested in freelance opportunities. However, if you have other request or question, don&apos;t hesitate to contact me
            </p>
          </div>

          {/* Right Side - Contact Boxes */}
          <div className="space-y-6">
            {/* Support Box */}
            <div className="border border-border bg-muted p-6">
              <h3 className="text-foreground font-bold text-lg mb-4">Support me here</h3>
              <p className="text-secondary text-lg font-mono">414950012069030</p>
            </div>

            {/* Message Box */}
            <div className="border border-border bg-muted p-6">
              <h3 className="text-foreground font-bold text-lg mb-4">Message me here</h3>
              <div className="space-y-4">
                {/* Social Links with Text */}
                {contactLinksWithText}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-primary">#</span>
            <span className="text-primary">all-media</span>
          </h2>
          
          <div className="flex flex-col gap-4">
            {socialLinks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 