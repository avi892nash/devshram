"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Dots from "../Dots";
import Logo from "../Logo";
import { useTranslation } from '@/hooks/useTranslation';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';

const SkillCategory = ({ title, items, index }: { title: string, items: string[], index: number }) => (
  <motion.div 
    className="border border-border bg-muted"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.03 }}
    whileHover={{ 
      scale: 1.02,
      borderColor: '#C778DD',
      transition: { duration: 0.2 }
    }}
  >
    <div className="border-b border-foreground bg-transparent p-3">
      <h3 className="text-foreground font-bold text-lg">{title}</h3>
    </div>
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {items.map((item, itemIndex) => (
          <motion.span 
            key={itemIndex} 
            className="text-secondary text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (index * 0.05) + (itemIndex * 0.01) + 0.1 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const FunFactCard = ({ fact, index }: { fact: string, index: number }) => (
  <motion.div 
    className="border border-border bg-muted p-4 text-secondary text-sm"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.03 }}
    whileHover={{ 
      scale: 1.05,
      borderColor: '#C778DD',
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.95 }}
  >
    {fact}
  </motion.div>
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
    <div className="min-h-screen w-full text-foreground relative page-background">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatedText
            text={`/${aboutMe.title}`}
            className="text-4xl font-bold mb-2 text-primary"
            type="fade"
            delay={0.05}
          />
          <AnimatedText
            text={aboutMe.subtitle}
            className="text-secondary"
            type="fade"
            delay={0.1}
          />
        </motion.div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <AnimatedSection direction="left" delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">{aboutMe.greeting}</h2>
              
              <p className="text-secondary leading-relaxed">
                {aboutMe.intro1}
              </p>
              
              <p className="text-secondary leading-relaxed">
                {aboutMe.intro2}
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative flex justify-center items-center">
              <div className="relative">
                <motion.div 
                  className="w-80 h-80 rounded-lg flex items-center justify-center relative overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Image
                    src="/avinash.png"
                    alt="Avinash"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </motion.div>
                
                {/* Decorative dots */}
                <motion.div 
                  className="absolute -top-4 -right-4"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <Dots width={60} height={60} />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Dots width={60} height={60} />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Skills Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">{aboutMe.skillsTitle}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {Object.entries(skillsData).map(([category, items], index) => (
                <div key={category} className="w-full">
                  <SkillCategory title={category} items={items} index={index} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Fun Facts Section */}
        <AnimatedSection direction="up" delay={0.25}>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">{aboutMe.funFactsTitle}</span>
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-start max-w-4xl">
              {aboutMe.funFacts.map((fact, index) => (
                <FunFactCard key={index} fact={fact} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute right-8 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Dots width={110} height={110} />
      </motion.div>
      <motion.div 
        className="absolute right-8 bottom-8"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <Logo
          width={120}
          height={120}
          stroke="stroke-primary"
          strokeWidth={0.5}
        />
      </motion.div>
    </div>
  );
};

export default AboutMePage; 