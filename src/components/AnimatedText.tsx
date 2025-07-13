"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "fade" | "typewriter" | "slide";
  speed?: number;
  inline?: boolean;
}

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  type = "fade",
  speed = 0.05,
  inline = false,
}: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (type === "typewriter") {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed * 1000);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, text, type, speed]);

  useEffect(() => {
    if (type === "typewriter") {
      const startTimeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, delay * 1000);

      return () => clearTimeout(startTimeout);
    }
  }, [text, type, delay]);

  if (type === "typewriter") {
    return inline ? (
      <span className={className}>
        {displayText}
      </span>
    ) : (
      <div className={className}>
        {displayText}
      </div>
    );
  }

  if (type === "slide") {
    return inline ? (
      <motion.span
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {text}
      </motion.span>
    ) : (
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {text}
      </motion.div>
    );
  }

  return inline ? (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay }}
      className={className}
    >
      {text}
    </motion.span>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText; 