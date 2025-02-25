"use client";

import React from "react";
import { youngSerif } from "./Fonts";
import Logo from "./Logo";
import Toolbar from "./Toolbar";
import useNavList from "../state/hooks/NavList";
import { useLinks } from "@/component/Links";

export const Header = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // variable to show burgen open menu
  const [showMenu, setShowMenu] = React.useState(false);
  const navList = useNavList();
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
          <div className={"hidden  gap-6 text-foreground text-base" + (showMenu ? "" : " md:flex") }>
          {navList}
          </div>

          {/* Right: Toolbar (Mobile Only) */}
          <div className={showMenu ? "": "md:hidden"} onClick={() => setShowMenu(!showMenu)}>
            <Toolbar width={24} height={24} fill="fill-secondary"></Toolbar>
          </div>
        </div>
      </div>
      { showMenu ?  <NavListMenu /> : children}
    </>
  );
};


function NavListMenu(){
  const navList = useNavList();
  const linkList = useLinks({ width : 64, height : 64});
  return (
    <div className="flex flex-col flex-grow p-6 bg-background">
      <div className="flex flex-col flex-grow text-foreground text-3xl justify-around">
        {navList}
        <div className="flex flex-row gap-5 justify-center ">
        {linkList}
        </div>
      </div>
    </div>
  );
}


export default Header;
