"use client";

import React from 'react';
import Image from 'next/image';
import Dots from "../Dots";
import Logo from "../Logo";
import { useTranslation } from '@/hooks/useTranslation';

const SkillCategory = ({ title, items }: { title: string, items: string[] }) => (
  <div className="border border-foreground bg-muted w-full">
    <div className="border-b border-foreground bg-transparent p-3">
      <h3 className="text-foreground font-bold text-lg">{title}</h3>
    </div>
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span key={index} className="text-secondary text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const FunFactCard = ({ fact }: { fact: string }) => (
  <div className="border border-border bg-muted p-4 text-secondary text-sm">
    {fact}
  </div>
);

const AboutMePage = () => {
  const { t } = useTranslation();
  const { skills, pages } = t;
  const aboutMe = pages['about-me'];

  const skillsData = {
    Languages: skills.languages,
    Other: skills.other,
    Tools: skills.tools,
    Databases: skills.databases,
    Frameworks: skills.frameworks
  };

  return (
    <div className="min-h-screen w-full bg-lightBackground text-foreground relative">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">/</span>
            <span className="text-primary">{aboutMe.title}</span>
          </h1>
          <p className="text-secondary">{aboutMe.subtitle}</p>
        </div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">{aboutMe.greeting}</h2>
            
            <p className="text-secondary leading-relaxed">
              {aboutMe.intro1}
            </p>
            
            <p className="text-secondary leading-relaxed">
              {aboutMe.intro2}
            </p>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/avinash.png"
                  alt="Avinash"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4">
                <Dots width={60} height={60} />
              </div>
              
              <div className="absolute -bottom-4 -left-4">
                <Dots width={60} height={60} />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-primary">#</span>
            <span className="text-primary">{aboutMe.skillsTitle}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {Object.entries(skillsData).map(([category, items]) => (
              <div key={category} className="w-full">
                <SkillCategory title={category} items={items} />
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="relative">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-primary">#</span>
            <span className="text-primary">{aboutMe.funFactsTitle}</span>
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-start max-w-4xl">
            {aboutMe.funFacts.map((fact, index) => (
              <FunFactCard key={index} fact={fact} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <Dots width={110} height={110} />
      </div>
      <div className="absolute right-8 bottom-8">
        <Logo
          width={120}
          height={120}
          stroke="stroke-primary"
          strokeWidth={0.5}
        />
      </div>
    </div>
  );
};

export default AboutMePage; 