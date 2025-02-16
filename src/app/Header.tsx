"use client";

import Image from "next/image";
import React from "react";
import { youngSerif } from "./Fonts";
import Logo from "./Logo";

export const Header = () => {
  return (
    <div>
      <div className="pb-2 pt-3 pl-3 pr-3 flex justify-between">
        <div className="flex gap-2 justify-center items-center">
          
          <Logo height={18} width={18} fill="white"></Logo>
          <div className={`${youngSerif.className} text-white text-lg `}>Devshram</div>
        </div>
        <Image src="/toolbar.png" alt="Devshram logo" width={24} height={24} />
      </div>
    </div>
  );
};

export default Header;
