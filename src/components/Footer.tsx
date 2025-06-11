import React from "react";
import { useLinks } from "./Links";

export default function Footer() {
  const socialLinks = useLinks({ 
    width: 32, 
    height: 32, 
    fill: "fill-foreground",
    showText: false,
    linkClassName: "hover:opacity-80 transition-opacity duration-300"
  });

  return (
    <footer className="bg-lightBackground text-foreground py-8 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Left side - Personal info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded-sm"></div>
              <h3 className="text-xl font-semibold">Elias</h3>
            </div>
            
            <div className="space-y-2">
              <p className="text-foreground">avihsan8922@gmail.com</p>
              <p className="text-foreground max-w-md">
                Backend and Frontend Expert And DSA/Algo/Problem Solver Expert
              </p>
            </div>
          </div>

          {/* Right side - Social media */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Media</h4>
            <div className="flex items-center gap-4">
              {socialLinks}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 