'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { LanguageSelector } from '@/components/language';


/*
    /
    /projects
    /about-me
    /contact
*/
export default function useNavList(onItemClick?: () => void){
    const router = useRouter();
    const pathname = usePathname();
    
    const navListUI = (item: {path: string, name: string}) => {
        // Improved path matching to handle trailing slashes and exact matches
        const isSelected = pathname === item.path || 
                          (item.path === "/" && pathname === "/") ||
                          (item.path !== "/" && pathname.startsWith(item.path));
        
        const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            router.push(item.path);
            // Close mobile menu when navigation item is clicked
            if (onItemClick) {
                onItemClick();
            }
        };

        const handleMouseEnter = () => {
            // Prefetch on hover for even faster navigation
            router.prefetch(item.path);
        };
        
        return (
            <a 
                key={item.path} 
                href={item.path} 
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                className={isSelected ? 'text-foreground cursor-pointer' : 'text-secondary cursor-pointer hover:text-foreground transition-colors'}
            >
                <span className='text-primary'>#</span>{item.name}
            </a>
        );
    };
    
    const navBarList = [
        {name: "home", path: "/"},
        {name: "projects", path: "/projects"},
        {name: "blog", path: "/blog"},
        {name: "tools", path: "/tools"},
        {name: "about-me", path: "/about-me"},
        {name: "contacts", path: "/contact"}
    ];
    
    const navList = navBarList.map(navListUI);
    navList.push(<LanguageSelector key="language"/>);
    return navList;
}