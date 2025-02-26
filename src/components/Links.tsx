import React from "react";
import DiscordLink from "./Links/Discord";
import Github from "./Links/Github";
import LinkedIn from "./Links/LinkedIn";

export function useLinks({ width, height }: { width: number; height: number }) {
  return [
    <DiscordLink width={width} height={height} key="discord" />,
    <Github width={width} height={height} key="github" />,
    <LinkedIn width={width} height={height} key="linkedin" />,
  ];
}
