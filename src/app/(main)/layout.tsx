import React from "react";
import { Header } from "./_components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-5 px-10">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
