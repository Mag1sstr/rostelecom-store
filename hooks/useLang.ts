import { LanguageContext } from "@/contexts/LanguageContext";
import { useContext } from "react";
import translationsJson from "../public/locales/translation.json";

export function useLang() {
  const { lang, setLang } = useContext(LanguageContext);
  const t = translationsJson;

  return { lang, setLang, t };
}
