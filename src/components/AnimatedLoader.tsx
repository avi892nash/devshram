"use client";

import { motion } from "framer-motion";

interface AnimatedLoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

const AnimatedLoader = ({ size = "md", color = "rgb(59 130 246)" }: AnimatedLoaderProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-current rounded-full`}
        style={{ borderTopColor: color }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedLoader; 