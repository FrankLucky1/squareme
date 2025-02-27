import React from "react";

type Props = {
  className?: string;
  onClick: () => void;
};
const MenuIcon = ({ className, onClick }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      data-testid="menu-icon"
      onClick={onClick}
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="#23262F"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;

