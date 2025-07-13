import Dots from '@/app/Dots';
import Logo from '@/app/Logo';
import Square from '@/app/Square';
import React from 'react';
import { skills } from '@/data';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  return (
    <div className="w-auto">
      {/* Header - Similar to ProjectsHeader */}
      <motion.div 
        className="flex justify-between items-center mb-8 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-white">
            <span className="text-primary">#</span>
            <span className="text-foreground">skills</span>
          </h2>
          {/* Horizontal Line extending to the right */}
          <motion.div 
            className="ml-6 flex-1 h-px bg-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>
      </motion.div>

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
          <motion.div 
            className="absolute top-0 right-0 flex gap-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Column 1 */}
            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent"
                whileHover={{ borderColor: "rgb(59 130 246)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold p-3 border-b border-border text-foreground">Languages</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.languages.join(' ')}
                </div>
              </motion.div>

              <motion.div 
                className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent"
                whileHover={{ borderColor: "rgb(59 130 246)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold p-3 border-b border-border text-foreground">Other</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.other.join(' ')}
                </div>
              </motion.div>
            </motion.div>

            {/* Column 2 */}
            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent"
                whileHover={{ borderColor: "rgb(59 130 246)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold p-3 border-b border-border text-foreground">Databases</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.databases.join(' ')}
                </div>
              </motion.div>

              <motion.div 
                className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent"
                whileHover={{ borderColor: "rgb(59 130 246)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold p-3 border-b border-border text-foreground">Frameworks</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.frameworks.join(' ')}
                </div>
              </motion.div>
            </motion.div>

            {/* Column 3 */}
            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div 
                className="border border-border min-h-[120px] min-w-[200px] flex flex-col bg-transparent"
                whileHover={{ borderColor: "rgb(59 130 246)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold p-3 border-b border-border text-foreground">Tools</h3>
                <div className="p-3 text-sm text-foreground flex-1">
                  {skills.tools.join(' ')}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
