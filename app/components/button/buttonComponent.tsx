/* eslint-disable */

import React from "react";

interface ButtonProps {
  name: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  name,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white rounded-lg focus:outline-none focus:ring-2 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
