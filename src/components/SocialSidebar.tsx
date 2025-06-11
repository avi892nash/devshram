import React from "react";
import { useLinks } from "./Links";

export default function SocialSidebar() {
  const list = useLinks({ width: 35, height: 35, fill : "fill-foreground" });

  return (
    <aside className="flex flex-col items-center bg-lightBackground ">
      {/* Top section with line */}
      <div className="flex flex-col items-center ">
        <div className="w-px bg-foreground h-40" />
      </div>

      {/* Icons section */}
      <div className="flex flex-col items-center gap-5 justify-around p-1">
        {list}
      </div>
    </aside>
  );
}
