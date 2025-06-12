import Dots from '@/app/Dots';
import Logo from '@/app/Logo';
import Square from '@/app/Square';
import React from 'react';
import { skills } from '@/data';

const SkillsSection = () => {
  return (
    <div className="w-auto">
      {/* Header - Similar to ProjectsHeader */}
      <div className="flex justify-between items-center mb-8 relative">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-white">
            <span className="text-primary">#</span>
            <span className="text-foreground">skills</span>
          </h2>
          {/* Horizontal Line extending to the right */}
          <div className="ml-6 flex-1 h-px bg-primary"></div>
        </div>
      </div>

      {/* Content with relative layout */}
      <div className="py-12 flex-grow">
        <div className="max-w-7xl relative">
          {/* Decorative background elements (left aligned) */}
          <div className="flex flex-col items-start gap-16">
            <div className="flex items-center gap-16">
              <Dots width={80} height={80} />
              <Square length={40} />
            </div>
            <div className="ml-8">
              <Dots width={60} height={60} />
            </div>
            <div className="flex items-center gap-20 mt-8">
              <Logo width={120} height={120} strokeWidth={0.6} />
              <Square length={50} />
            </div>
          </div>

          {/* Skills boxes (right aligned in absolute position) */}
          <div className="absolute top-0 right-0 flex gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent">
                <h3 className="font-bold p-3 border-b border-border text-foreground">Languages</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.languages.join(' ')}
                </div>
              </div>

              <div className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent">
                <h3 className="font-bold p-3 border-b border-border text-foreground">Other</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.other.join(' ')}
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent">
                <h3 className="font-bold p-3 border-b border-border text-foreground">Databases</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.databases.join(' ')}
                </div>
              </div>

              <div className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent">
                <h3 className="font-bold p-3 border-b border-border text-foreground">Frameworks</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.frameworks.join(' ')}
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <div className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent">
                <h3 className="font-bold p-3 border-b border-border text-foreground">Tools</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.tools.join(' ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
