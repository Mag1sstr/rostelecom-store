"use client";

import { createContext, useState } from "react";

interface IModalsContext {
  openMenu: boolean;
  setOpenMenu: (fn: (prev: boolean) => boolean) => void;
}

export const ModalsContext = createContext({} as IModalsContext);

export default function ModalsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <ModalsContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </ModalsContext.Provider>
  );
}
