"use client";

import React from "react";

export default function CrossIcon({
  width = 24,
  height = 24,
  stroke = "currentColor",
  strokeWidth = 2,
  className = "",
}: {
  width?: number | string;
  height?: number | string;
  stroke?: string;
  strokeWidth?: number | string;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M18 6L6 18M6 6l12 12" 
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
} 