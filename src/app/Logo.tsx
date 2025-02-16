import React from "react";


/*
<Logo width="50px" height="50px" />
<Logo width="100%" height="auto" />

*/
export default function Logo({
  width = "100%",
  height = "100%",
  stroke = "stroke-primary",
  strokeWidth = 0.2,
  fill = "none",
}: {
  width?: number | string;
  height?: number | string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 62 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M49.7341 0.368543C48.7539 -0.140648 47.5465 0.241182 47.0373 1.22138C46.5281 2.20159 46.91 3.40898 47.8902 3.91817C52.5228 6.32473 55.0704 9.65205 57.2922 14.7305C57.735 15.7425 58.9142 16.2039 59.9262 15.7612C60.9382 15.3185 61.3996 14.1392 60.9569 13.1272C58.4913 7.49159 55.4139 3.31904 49.7341 0.368543Z"
        className={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill={fill}
      />
      <path
        d="M8.49994 3.21477H15.9999V17.1431H8.49994V3.21477Z"
        className={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill={fill}
      />
      <path
        d="M20 4H24C41.1684 4 49.3743 8.0589 53.0506 13.8585C53.987 15.3358 54.5951 17.1137 55.0145 18.7122C55.4479 20.3646 55.7492 22.1033 55.961 23.6641C56.3846 26.7868 56.4844 29.4634 56.4968 29.8348C56.4986 29.8888 56.4998 29.9432 56.5002 30.0046C56.5027 30.3826 56.5047 32.862 56.119 35.8252C55.7577 38.6024 54.9674 42.6032 52.9424 45.4783C51.101 48.0928 48.792 50.4339 44.2479 51.948C40.0538 53.3455 34.0708 54 24.9509 54H20.9509V46H24.9509C33.8965 46 38.8039 45.3295 41.7189 44.3582C44.2839 43.5036 45.3028 42.4322 46.4018 40.8717C47.2165 39.7151 47.8422 37.4345 48.1859 34.7929C48.4963 32.4081 48.5017 30.3808 48.5005 30.08C48.4886 29.7397 48.3964 27.4141 48.0336 24.7396C47.8477 23.3695 47.5995 21.9744 47.2762 20.742C46.9389 19.4559 46.5832 18.5983 46.2937 18.1415C44.8989 15.9411 40.4096 12 24 12H20V4Z"
        className={stroke} 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill={fill}
      />
      <path
        d="M15.9999 40.7141H8.49994V54.6425H15.9999V40.7141Z"
        className={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill={fill}
      />
      <path
        d="M1 24.1073C1 22.628 2.19922 21.4288 3.67853 21.4288H30.1962C31.6755 21.4288 32.8748 22.628 32.8748 24.1073C32.8748 25.5866 31.6755 26.7858 30.1962 26.7858H3.67853C2.19922 26.7858 1 25.5866 1 24.1073Z"
        className={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill={fill}
      />
      <path
        d="M3.67853 31.0714C2.19922 31.0714 1 32.2707 1 33.75C1 35.2293 2.19922 36.4285 3.67853 36.4285H30.1962C31.6755 36.4285 32.8748 35.2293 32.8748 33.75C32.8748 32.2707 31.6755 31.0714 30.1962 31.0714H3.67853Z"
        className={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill={fill}
      />
      <path
        d="M59.8637 44.2128C60.8901 44.621 61.3912 45.784 60.983 46.8103C58.4504 53.1779 54.8317 56.7205 49.8044 59.5932C48.8454 60.1412 47.6237 59.808 47.0756 58.849C46.5276 57.89 46.8608 56.6682 47.8199 56.1202C52.1675 53.6359 55.1113 50.75 57.2662 45.3321C57.6744 44.3057 58.8373 43.8046 59.8637 44.2128Z"
        className={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill={fill}
      />
    </svg>
  );
}
