import React from "react";
import { useLinks } from "./Links";
import { contacts } from "@/data";

export default function Contacts() {
  const contactLinks = useLinks({ 
    width: 24, 
    height: 24, 
    fill: "fill-secondary",
    showText: true,
    textClassName: "text-secondary text-sm",
    linkClassName: "hover:opacity-80 transition-opacity duration-300",
    itemClassName: "flex items-center gap-3"
  });

  return (
    <div className="w-auto">
      {/* Header - Similar to SkillsSection */}
      <div className="flex justify-between items-center mb-8 relative">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-white">
            <span className="text-primary">#</span>
            <span className="text-foreground">contacts</span>
          </h2>
          {/* Horizontal Line extending to the right */}
          <div className="ml-6 flex-1 h-px bg-primary min-w-[200px] max-w-[400px]"></div>
        </div>
      </div>

      {/* Content with horizontal layout */}
      <div className="py-12 flex-grow">
        <div className="max-w-7xl">
          <div className="flex justify-between items-start">
            {/* Left side - Text content */}
            <div className="max-w-md">
              <div className="space-y-4 text-secondary leading-relaxed">
                <p className="text-base">
                  {contacts.message}
                </p>
              </div>
            </div>
            
            {/* Right side - Contact Info */}
            <div className="flex-shrink-0">
              <div className="border border-secondary p-6 bg-transparent w-[280px]">
                <h3 className="text-white font-semibold mb-4 text-base">
                  Message me here
                </h3>
                
                <div className="space-y-4">
                  {/* Social Links */}
                  {contactLinks}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 