import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher({ className = "" }) {
  const { i18n, t } = useTranslation("common");
  const current = (i18n.resolvedLanguage || i18n.language || "el").startsWith(
    "el",
  )
    ? "el"
    : "en";

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`flex items-center gap-2 text-xl tracking-wider text-white ${className}`}
      role="group"
      aria-label={t("a11y.language")}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`cursor-pointer transition duration-300 hover:text-primary ${
          current === "en" ? "text-primary" : "text-white"
        }`}
        aria-pressed={current === "en"}
        aria-label="English"
        lang="en"
      >
        EN
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => setLang("el")}
        className={`cursor-pointer transition duration-300 hover:text-primary ${
          current === "el" ? "text-primary" : "text-white"
        }`}
        aria-pressed={current === "el"}
        aria-label="Ελληνικά"
        lang="el"
      >
        EL
      </button>
    </div>
  );
}

export default LanguageSwitcher;
