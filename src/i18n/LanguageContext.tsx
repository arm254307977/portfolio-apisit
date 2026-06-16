/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import th from "./th";
import en from "./en";

type Lang = "th" | "en";
type Translations = typeof th;

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("portfolio-lang");
    return (saved as Lang) || "en";
  });

  const t = lang === "th" ? th : en;

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.classList.toggle("lang-th", lang === "th");
  }, [lang]);

  const toggleLang = () => {
    const next: Lang = lang === "th" ? "en" : "th";
    setLang(next);
    localStorage.setItem("portfolio-lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
