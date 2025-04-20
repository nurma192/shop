import React, { ReactNode } from "react";
import Header from "./header";
import { NavBar } from "./navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col min-h-screen">
      <Header />
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
