"use client";

import React from "react";
import { youngSerif } from "./Fonts";
import Logo from "./Logo";
import Toolbar from "./Toolbar";
import NavList from "./NavList";

export const Header = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="sticky top-0 bg-headerBackground">
        <div className="pb-2 pt-3 pl-3 pr-3 flex justify-between">
          <div className="flex gap-2 justify-center items-center">
            <Logo height={18} width={18} fill="fill-foreground"></Logo>
            <div className={`${youngSerif.className} text-foreground text-lg `}>
              Devshram
            </div>
          </div>
          {/* Middle: Navigation Links (Desktop Only) */}
          <div className="hidden md:flex gap-6 text-foreground text-base">
            <NavList />
          </div>

          {/* Right: Toolbar (Mobile Only) */}
          <div className="md:hidden">
            <Toolbar width={24} height={24} fill="fill-secondary"></Toolbar>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Header;
