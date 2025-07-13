"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLinks } from '@/components/Links';
import { useTranslation } from '@/hooks/useTranslation';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedText from '@/components/AnimatedText';

const ContactPage = () => {
  const { t } = useTranslation();
  const { pages } = t;
  const contact = pages.contact;
  
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
    <div className="min-h-screen w-full text-foreground page-background">
      <div className="w-full max-w-[1300px] mx-auto px-6 py-12">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText
            text={`/${contact.title}`}
            className="text-4xl font-bold mb-2 text-primary"
            type="fade"
            delay={0.2}
          />
          <AnimatedText
            text={contact.subtitle}
            className="text-secondary"
            type="fade"
            delay={0.4}
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Description */}
          <AnimatedSection direction="left" delay={0.3}>
            <div className="space-y-6">
              <p className="text-secondary leading-relaxed text-lg">
                {contact.description}
              </p>
            </div>
          </AnimatedSection>

          {/* Right Side - Contact Boxes */}
          <AnimatedSection direction="right" delay={0.5}>
            <div className="space-y-6">
              {/* Support Box */}
              <motion.div 
                className="border border-border bg-muted p-6"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: '#C778DD',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-foreground font-bold text-lg mb-4">{contact.supportTitle}</h3>
                <p className="text-secondary text-lg font-mono">{contact.supportNumber}</p>
              </motion.div>

              {/* Message Box */}
              <motion.div 
                className="border border-border bg-muted p-6"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: '#C778DD',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-foreground font-bold text-lg mb-4">{contact.messageTitle}</h3>
                <div className="space-y-4">
                  {/* Social Links with Text */}
                  {contactLinksWithText}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Social Media Section */}
        <AnimatedSection direction="up" delay={0.7}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">
              <span className="text-primary">#</span>
              <span className="text-primary">{contact.allMedia}</span>
            </h2>
            
            <div className="flex flex-col gap-4">
              {socialLinks}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage; 