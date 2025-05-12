"use client";
import { createContext, useState } from "react";

export enum EnumLang {
  RU = "ru",
  EN = "en",
}

interface ILangContext {
  lang: EnumLang;
  setLang: (lang: EnumLang) => void;
}

export const LanguageContext = createContext({} as ILangContext);

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<EnumLang>(EnumLang.RU);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
