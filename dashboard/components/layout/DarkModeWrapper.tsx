// components/layout/DarkModeWrapper.tsx
"use client";

import { useState, createContext, ReactNode } from "react";

type DarkModeContextType = {
  dark: boolean;
  toggleDark: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({} as DarkModeContextType);



export default function DarkModeWrapper({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  const toggleDark = () => setDark(!dark);

  return (
    <DarkModeContext.Provider value={{ dark, toggleDark }}>
      <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}
