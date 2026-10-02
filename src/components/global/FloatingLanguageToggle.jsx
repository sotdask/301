import React from "react";
import { useTranslation } from "react-i18next";

function FloatingLanguageToggle() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "el").startsWith(
    "el",
  )
    ? "el"
    : "en";
  const next = current === "el" ? "en" : "el";

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      className="fixed right-4 bottom-4 z-80 flex size-12 items-center justify-center rounded-full bg-primary text-sm font-bold uppercase tracking-wider text-black shadow-lg transition duration-300 hover:scale-105 active:scale-95 lg:hidden"
      aria-label={next === "en" ? "Switch to English" : "Αλλαγή σε Ελληνικά"}
      title={next === "en" ? "EN" : "EL"}
    >
      {next.toUpperCase()}
    </button>
  );
}

export default FloatingLanguageToggle;
