"use client";

import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="pb-2 pt-3 pl-3 pr-3 flex justify-between">
        <div className="flex gap-2 ">
          <Image
            className="pt-1 pb-1"
            src="/logo60x60bg.png"
            alt="Devshram logo"
            width={16}
            height={16}
          />
          <div className="text-white text-lg ">Devshram</div>
        </div>
        <Image src="/toolbar.png" alt="Devshram logo" width={24} height={24} />
      </div>
    </div>
  );
};

export default Header;
