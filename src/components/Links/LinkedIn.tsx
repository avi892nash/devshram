import React from "react";
import { motion } from "framer-motion";

interface LinkedInProps {
  width?: number;
  height?: number;
  href?: string;
  title?: string;
  fill?: string;
}

export default function LinkedIn({
  width = 32,
  height = 32,
  href,
  title,
  fill = "#ABB2BF"
}: LinkedInProps) {
  const svgElement = (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ 
        scale: 1.02,
        rotate: -2,
        transition: { duration: 0.2 }
      }}
    >
      <motion.path
        d="M4 5.719C4 4.7695 4.789 4 5.7625 4H26.2375C27.211 4 28 4.7695 28 5.719V26.281C28 27.2305 27.211 28 26.2375 28H5.7625C4.789 28 4 27.2305 4 26.281V5.719ZM11.4145 24.091V13.2535H7.813V24.091H11.4145ZM9.6145 11.773C10.87 11.773 11.6515 10.942 11.6515 9.901C11.629 8.8375 10.8715 8.029 9.6385 8.029C8.4055 8.029 7.6 8.839 7.6 9.901C7.6 10.942 8.3815 11.773 9.5905 11.773H9.6145ZM16.9765 24.091V18.0385C16.9765 17.7145 17.0005 17.3905 17.0965 17.1595C17.356 16.513 17.9485 15.8425 18.9445 15.8425C20.248 15.8425 20.7685 16.8355 20.7685 18.2935V24.091H24.37V17.875C24.37 14.545 22.594 12.997 20.224 12.997C18.313 12.997 17.4565 14.047 16.9765 14.7865V14.824H16.9525C16.9605 14.8115 16.9685 14.799 16.9765 14.7865V13.2535H13.3765C13.4215 14.2705 13.3765 24.091 13.3765 24.091H16.9765Z"
        className={`${fill}`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  );

  if (href) {
    return (
      <motion.a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        title={title}
        className="hover:opacity-80 transition-opacity duration-300 inline-block"
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {svgElement}
      </motion.a>
    );
  }

  return svgElement;
}
