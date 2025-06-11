"use client";

import React from 'react';
import Dots from "../Dots";
import Logo from "../Logo";

const skills = {
  Languages: ['TypeScript', 'Lua', 'Python', 'JavaScript'],
  Other: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'],
  Tools: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome', 'KDE', 'fish'],
  Databases: ['SQLite', 'PostgreSQL', 'Mongo'],
  Frameworks: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js']
};

const funFacts = [
  'I like winter more than summer',
  'I often bike with my friends',
  'I like pizza and pasta',
  'I was in Egypt, Poland and Turkey',
  'My favorite movie is The Green Mile',
  'I am still in school',
  "I don&apos;t have any siblings"
];

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
  return (
    <div className="min-h-screen w-full bg-background text-foreground relative">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-primary">/</span>
            <span className="text-primary">about-me</span>
          </h1>
          <p className="text-secondary">Who am I?</p>
        </div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Hello, I&apos;m Elias!</h2>
            
            <p className="text-secondary leading-relaxed">
              I&apos;m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            
            <p className="text-secondary leading-relaxed">
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </p>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
                <img
                  src="/avinash.png"
                  alt="Avinash"
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
            <span className="text-primary">skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {Object.entries(skills).map(([category, items]) => (
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
            <span className="text-primary">my-fun-facts</span>
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-start max-w-4xl">
            {funFacts.map((fact, index) => (
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