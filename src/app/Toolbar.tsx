"use client";

import React from "react";

export default function Toolbar({
  width = 24,
  height = 24,
  fill = "none",
  className = "",
}: {
  width?: number | string;
  height?: number | string;
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect y="5" width="24" height="2" fill="currentColor" />
      <rect x="9" y="12" width="15" height="2" fill="currentColor" />
    </svg>
  );
}
