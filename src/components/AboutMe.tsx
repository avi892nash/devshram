import React from "react";
import Image from "next/image";
import Dots from "@/app/Dots";

export default function AboutMe() {
  return (
    <section className="w-auto text-white flex items-center relative overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-4">
            <div className="flex items-center">
              <h2 className="text-3xl font-bold text-white">
                <span className="text-primary">#</span>
                <span className="text-foreground">about-me</span>
              </h2>
              {/* Horizontal Line extending to the right */}
              <div className="ml-6 flex-1 h-px bg-primary min-w-[200px] max-w-[400px]"></div>
            </div>
            
                          <div className="space-y-4 text-secondary leading-relaxed">
              <p className="text-base">
                Hello, I&apos;m Elias!
              </p>
              
              <p className="text-base">
                I&apos;m a self-taught front-end developer based in Kyiv, 
                Ukraine. I can develop responsive websites from 
                scratch and raise them into modern user-friendly web 
                experiences.
              </p>
              
              <p className="text-base">
                Transforming my creativity and knowledge into a 
                websites has been my passion for over a year. I have 
                been helping various clients to establish their 
                presence online. I always strive to learn about the 
                newest technologies and frameworks.
              </p>
            </div>
            
            <button className="border-2 border-primary text-foreground px-6 py-3 hover:bg-muted transition-colors duration-300 flex items-center gap-2 group">
              Read more
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <div className="relative">
              <Image
                src="/avinash.png"
                alt="Profile image"
                width={400}
                height={600}
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* Decorative dots positioned around the image */}
            <div className="absolute -top-8 -right-8">
                              <Dots width={120} height={120} fill="fill-primary" />
            </div>
            
            <div className="absolute -bottom-12 -left-8">
              <Dots width={80} height={80} fill="fill-gray-600" />
            </div>
            
            <div className="absolute top-1/2 -right-12">
              <Dots width={60} height={60} fill="fill-gray-700" />
            </div>
          </div>
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