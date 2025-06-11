import React from "react";
import DiscordLink from "./Links/Discord";
import Github from "./Links/Github";
import LinkedIn from "./Links/LinkedIn";
import Email from "./Links/Email";

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
  const linkData: LinkItem[] = [
    {
      type: 'discord',
      href: "https://discord.com/users/523615093917745163",
      title: "avi892nash",
      displayText: "avi892nash"
    },
    {
      type: 'github',
      href: "https://github.com/avi892nash",
      title: "avi892nash",
      displayText: "avi892nash"
    },
    {
      type: 'linkedin',
      href: "https://www.linkedin.com/in/avi892nash/",
      title: "avi892nash",
      displayText: "avi892nash"
    },
    {
      type: 'email',
      href: "mailto:avihsan8922@gmail.com",
      title: "avihsan8922@gmail.com",
      displayText: "avihsan8922@gmail.com"
    }
  ];

  const renderLink = (item: LinkItem, key: string) => {
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
        <div className={itemClassName} key={key}>
          <a 
            href={item.href} 
            target="_blank" 
            rel="noopener noreferrer"
            title={item.title}
            className={linkClassName}
          >
            {iconElement}
          </a>
          <span className={textClassName}>{item.displayText}</span>
        </div>
      );
    }

    return (
      <a 
        href={item.href} 
        target="_blank" 
        rel="noopener noreferrer"
        title={item.title}
        className={linkClassName}
        key={key}
      >
        {iconElement}
      </a>
    );
  };

  return linkData.map((item, index) => renderLink(item, `${item.type}-${index}`));
}
