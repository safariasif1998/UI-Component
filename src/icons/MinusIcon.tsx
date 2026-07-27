import React from "react";

export type MinusIconProps = {
    className?: string,
    width?: number,
    height?: number,
    strokeWidth?: number,
};

export function MinusIcon(props: MinusIconProps) {
  const {className , height, width, strokeWidth} = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-minus-icon lucide-minus ${className}`}
    >
      <path d="M5 12h14" />
    </svg>
  );
}
