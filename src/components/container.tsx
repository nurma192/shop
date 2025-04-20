import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full flex flex-col items-center px-2 md:px-7">{children}</div>;
};
