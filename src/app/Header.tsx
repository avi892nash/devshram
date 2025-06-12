"use client";

import React from "react";
import { youngSerif } from "./Fonts";
import Logo from "./Logo";
import Toolbar from "./Toolbar";
import CrossIcon from "./CrossIcon";
import useNavList from "../state/hooks/NavList";
import { useLinks } from "@/components/Links";
import SocialSidebar from "@/components/SocialSidebar";
import { usePathname } from "next/navigation";

export const Header = ({
  children,
  footer,
}: Readonly<{
  children: React.ReactNode;
  footer: React.ReactNode;
}>) => {
  // variable to show burger open menu
  const [showMenu, setShowMenu] = React.useState(false);
  const navList = useNavList();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <>
      <div className="overflow-auto md:justify-center bg-background">
        <div className="relative flex flex-grow">
          <div className="hidden md:flex flex-grow px-8 ">
            <div>
              <div className="sticky top-0">
                <SocialSidebar></SocialSidebar>
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col w-full max-w-[1300px] mx-auto min-h-screen">
            <div className="sticky top-0 bg-lightBackground w-full z-50">
              <div className="pb-2 pt-5 pl-3 pr-3 flex justify-between">
                <div className="flex gap-2 justify-center items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/';
                  }
                }}>
                  <Logo height={18} width={18} fill="fill-foreground"></Logo>
                  <div
                    className={`${youngSerif.className} text-foreground text-lg `}
                  >
                    Devshram
                  </div>
                </div>
                {/* Middle: Navigation Links (Desktop Only) */}
                <div
                  className={
                    "hidden gap-6 text-foreground text-base" +
                    (showMenu ? "" : " md:flex")
                  }
                >
                  {navList}
                </div>

                {/* Right: Toolbar (Mobile Only) */}
                <div
                  className={showMenu ? "" : "md:hidden"}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {showMenu ? (
                    <CrossIcon
                      width={24}
                      height={24}
                      stroke="currentColor"
                      strokeWidth={2}
                      className="text-foreground"
                    />
                  ) : (
                    <Toolbar
                      width={24}
                      height={24}
                      fill="none"
                      className="text-foreground"
                    />
                  )}
                </div>
              </div>
            </div>
            {showMenu ? <NavListMenu onItemClick={() => setShowMenu(false)} /> : children}
          </div>
          <div className="hidden md:flex flex-grow px-8">
            <div className="absolute"></div>
          </div>
        </div>
        <div className={showMenu ? "hidden" : (isHomePage ? "hidden md:block" : "block md:block")}>
          {footer}
        </div>
      </div>
    </>
  );
};

function NavListMenu({ onItemClick }: { onItemClick: () => void }) {
  const navList = useNavList(onItemClick);
  const linkList = useLinks({ width: 80, height: 80, fill : "fill-foreground" });
  return (
    <div className="flex flex-grow flex-col p-6 bg-background">
      <div className="flex flex-col space-y-8 text-foreground text-3xl pt-8">
        {navList}
      </div>
      <div className="flex flex-grow justify-center">
        <div className="flex items-center">
      <div className="grid grid-cols-3 grid-rows-2 items-center gap-6">
        {linkList.map((link, index) => (
          <div key={index} className="w-16 h-16 flex items-center justify-center">
            {link}
          </div>
        ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
