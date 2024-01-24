import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { useActiveLink } from "../context/activeLink";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { open } = useActiveLink();
  return (
    <div className="flex w-full">
      <div
        className={`hidden lg:block w-full lg:transition-all relative ${
          open ? "lg:max-w-[250px]" : "lg:max-w-[80px]"
        } h-[100vh] overflow-y-scroll shrink-0`}
      >
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <div className="bg-background">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
