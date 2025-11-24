import React from "react";

export const CricketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Bat */}
    <path d="M6 4L16 14L14 16L4 6L6 4Z" />
    <path d="M16 14L20 18" />
    <path d="M15 13L19 17" />
    {/* Handle */}
    <path d="M18 2L22 6" />
    {/* Ball */}
    <circle cx="8" cy="18" r="3" />
  </svg>
);

export const BadmintonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Racket Head */}
    <ellipse cx="12" cy="9" rx="6" ry="7" />
    {/* Netting (simplified) */}
    <path d="M12 2V16" />
    <path d="M6 9H18" />
    {/* Handle */}
    <path d="M12 16V22" />
    <path d="M10 22H14" />
  </svg>
);
