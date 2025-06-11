import React from "react";

export default function Square({
  length = 40,
  stroke = "stroke-primary",
  strokeWidth = "2",
}: {
  length?: number;
  stroke?: string;
  strokeWidth?: string;
}) {
  return (
    <svg
      width={length}
      height={length}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        fill="none"
        className={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
} 