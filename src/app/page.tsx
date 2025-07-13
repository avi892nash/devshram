"use client";

import QuoteCard from "@/components/QuoteCard";
import Dots from "./Dots";
import { firaCode, youngSerif } from "./Fonts";
import Logo from "./Logo";
import Image from 'next/image';
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import { home, quote } from "@/data";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-grow w-full page-background">
      <div className="flex flex-grow md:flex-col w-full max-w-[1300px] mx-auto">
        <div className="flex flex-grow flex-col md:flex-row md:items-center justify-center px-4 py-4 md:h-auto">
          <div className="flex flex-col flex-grow justify-center md:justify-normal">
            <HomeMain></HomeMain>
          </div>
          <div className="flex flex-col ">
            <div>
              <Avinash></Avinash>
              <CurrentWork></CurrentWork>
            </div>
          </div>
        </div>
        <AnimatedSection className="px-6 py-32 pb-24 hidden md:block" delay={0.1}>
          <div className="flex justify-center">
            <QuoteCard quote={quote.text} author={quote.author}></QuoteCard>
          </div>
        </AnimatedSection>
        <AnimatedSection className="px-6 pb-24 hidden md:block" delay={0.15}>
          <ProjectsSection></ProjectsSection>
        </AnimatedSection>
        <AnimatedSection className="px-6 pb-24 hidden md:block" delay={0.2}>
          <SkillsSection></SkillsSection>
        </AnimatedSection>
        <AnimatedSection className="px-6 pb-24 hidden md:block" delay={0.25}>
          <AboutMe></AboutMe>
        </AnimatedSection>
        <AnimatedSection className="px-6 pb-48 hidden md:block" delay={0.3}>
          <Contacts></Contacts>
        </AnimatedSection>
      </div>
    </div>
  );
}

function HomeMain() {
  return (
    <AnimatedSection className="flex flex-col gap-5 justify-center" delay={0}>
      <motion.p
        className={`${youngSerif.className} text-foreground text-2xl sm:text-3xl leading-15`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <AnimatedText text={home.title.main} type="fade" delay={0.2} inline />
        <br />
        <span>
          <AnimatedText text={home.title.highlight1} type="fade" delay={0.3} className="text-primary" inline />
          <AnimatedText text={home.title.continuation} type="fade" delay={0.35} inline />
        </span>
        <br />
        <AnimatedText text={home.title.line2} type="fade" delay={0.4} inline />
        <br />
        <AnimatedText text={home.title.highlight2} type="fade" delay={0.45} className="text-primary" inline />
      </motion.p>
      <motion.p 
        className={`mt-2 text-secondary sm:text-xl ${firaCode.className}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <AnimatedText text={home.subtitle} type="fade" delay={0.55} inline />
        <br />
        <AnimatedText text={home.subtitle2} type="fade" delay={0.6} inline />
      </motion.p>
    </AnimatedSection>
  );
}

function Avinash() {
  return (
    <AnimatedSection className="relative flex flex-row flex-grow gap-2 justify-center" delay={0.1} direction="right">
      <div className="flex relative flex-col justify-end md:justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Image
            src="/avinash.png"
            alt="Avinash"
            width={384}
            height={384}
            className="bottom-0 max-h-96 w-auto pl-8 pr-8"
          />
        </motion.div>
        <motion.div 
          className="absolute left-0 top-20"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Logo
            width={120}
            height={120}
            stroke="stroke-primary"
            strokeWidth={0.5}
          ></Logo>
        </motion.div>
        <motion.div 
          className="absolute right-0 bottom-16"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Dots width={110} height={110}></Dots>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function CurrentWork() {
  return (
    <div className="flex flex-col flex-grow-0 mt-4">
      <motion.div 
        className="flex border border-secondary items-center gap-2"
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        whileHover={{ 
          borderColor: "rgb(199 120 221)",
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <motion.div 
          className="w-4 h-4 bg-primary flex-shrink-0 ml-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: 0.1
          }}
        >
          <motion.div
            className="w-full h-full bg-primary"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: 0.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <motion.div 
          className="p-2"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <p className={`text-secondary ${firaCode.className}`}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {home.currentWork.status}
            </motion.span>
            <br /> 
            <motion.span 
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              {home.currentWork.project}
            </motion.span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
