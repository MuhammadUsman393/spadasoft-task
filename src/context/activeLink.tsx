import React, { createContext, useContext, useState, ReactNode } from "react";
import { activeLinkProps } from "../types/activeLinkProps";

const activeLink = createContext<activeLinkProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <activeLink.Provider value={{ open, setOpen }}>
      {children}
    </activeLink.Provider>
  );
};

export const useActiveLink = () => {
  const context = useContext(activeLink);
  if (!context) {
    throw new Error("useActiveLink must be used within an AppProvider");
  }
  return context;
};
