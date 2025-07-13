import React from "react";
import { motion } from "framer-motion";
import DiscordLink from "./Links/Discord";
import Github from "./Links/Github";
import LinkedIn from "./Links/LinkedIn";
import Email from "./Links/Email";
import { contacts } from "@/data";

export interface LinkItem {
  type: 'discord' | 'github' | 'linkedin' | 'email';
  href: string;
  title: string;
  displayText?: string;
}

export interface UseLinksOptions {
  width: number;
  height: number;
  fill?: string;
  showText?: boolean;
  textClassName?: string;
  linkClassName?: string;
  itemClassName?: string;
}

export function useLinks({ 
  width, 
  height, 
  fill, 
  showText = false,
  textClassName = "text-secondary text-sm",
  linkClassName = "hover:opacity-80 transition-opacity duration-300",
  itemClassName = "flex items-center gap-3"
}: UseLinksOptions) {
  const linkData: LinkItem[] = contacts.links;

  const renderLink = (item: LinkItem, key: string, index: number) => {
    let IconComponent;
    
    switch (item.type) {
      case 'discord':
        IconComponent = DiscordLink;
        break;
      case 'github':
        IconComponent = Github;
        break;
      case 'linkedin':
        IconComponent = LinkedIn;
        break;
      case 'email':
        IconComponent = Email;
        break;
      default:
        return null;
    }

    const iconElement = (
      <IconComponent 
        width={width} 
        height={height} 
        fill={fill}
      />
    );

    if (showText) {
      return (
        <motion.div 
          className={`${itemClassName} overflow-hidden`} 
          key={key}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <motion.a 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
            title={item.title}
            className={`${linkClassName} inline-block`}
            whileHover={{ 
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {iconElement}
          </motion.a>
          <motion.span 
            className={textClassName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: (index * 0.1) + 0.2 }}
          >
            {item.displayText}
          </motion.span>
        </motion.div>
      );
    }

    return (
      <motion.a 
        href={item.href} 
        target="_blank" 
        rel="noopener noreferrer"
        title={item.title}
        className={`${linkClassName} inline-block overflow-hidden`}
        key={key}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ 
          scale: 1.05,
          rotate: 3,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        {iconElement}
      </motion.a>
    );
  };

  return linkData.map((item, index) => renderLink(item, `${item.type}-${index}`, index));
}
