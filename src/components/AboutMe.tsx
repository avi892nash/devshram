"use client";

import React from "react";
import Image from "next/image";
import Dots from "@/app/Dots";
import { personal } from "@/data";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "framer-motion";

export default function AboutMe() {
  const { t } = useTranslation();
  const { pages } = t;
  const aboutMe = pages['about-me'];

  return (
    <section className="w-auto text-white flex items-center relative overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white">
                <span className="text-primary">#</span>
                <span className="text-foreground">about-me</span>
              </h2>
              {/* Horizontal Line extending to the right */}
              <motion.div 
                className="ml-6 flex-1 h-px bg-primary min-w-[200px] max-w-[400px]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </motion.div>
            
            <motion.div 
              className="space-y-4 text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.p 
                className="text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Hello, I&apos;m {personal.name}!
              </motion.p>
              
              <motion.p 
                className="text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {personal.description}
              </motion.p>
              
              <motion.p 
                className="text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {personal.passion}
              </motion.p>
            </motion.div>
            
            <motion.button 
              className="border-2 border-primary text-foreground px-6 py-3 hover:bg-muted transition-colors duration-300 flex items-center gap-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              whileTap={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
            >
              {aboutMe.readMore}
              <motion.svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src={personal.image}
                alt="Profile image"
                width={400}
                height={600}
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
            
            {/* Decorative dots positioned around the image */}
            <motion.div 
              className="absolute -top-8 -right-8"
              initial={{ opacity: 0, rotate: -180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Dots width={120} height={120} fill="fill-primary" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-12 -left-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Dots width={80} height={80} fill="fill-gray-600" />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -right-12"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Dots width={60} height={60} fill="fill-gray-700" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-30">
        <Dots width={100} height={100} fill="fill-gray-800" />
      </div>
      
      <div className="absolute bottom-20 right-20 opacity-20">
        <Dots width={140} height={140} fill="fill-gray-800" />
      </div>
    </section>
  );
} 