import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={` flex items-center gap-2 py-3 px-4 text-sm transition-all rounded-xl cursor-pointer text-text-secondary ${className} `}>
      {children}
    </button>
  );
};

export default button;
