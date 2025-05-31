import React from "react";
import { useLinks } from "./Links";

export default function SocialSidebar() {
  const list = useLinks({ width: 40, height: 40 });

  return (
    <aside className="flex flex-col items-center bg-[#5f3b14] ">
      {/* Top section with line */}
      <div className="flex flex-col items-center ">
        <div className="w-px bg-gray-400 h-40" />
      </div>

      {/* Icons section */}
      <div className="flex flex-col items-center gap-5 justify-around p-2">
        {list}
      </div>
    </aside>
  );
}
