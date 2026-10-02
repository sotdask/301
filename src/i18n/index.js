import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import elCommon from "./locales/el/common.json";
import elHome from "./locales/el/home.json";
import elAbout from "./locales/el/about.json";
import elProjects from "./locales/el/projects.json";
import elContact from "./locales/el/contact.json";
import elArticles from "./locales/el/articles.json";
import elKamari from "./locales/el/kamari.json";
import elEleni from "./locales/el/eleni.json";
import elEventVenue from "./locales/el/eventVenue.json";
import elLegal from "./locales/el/legal.json";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enProjects from "./locales/en/projects.json";
import enContact from "./locales/en/contact.json";
import enArticles from "./locales/en/articles.json";
import enKamari from "./locales/en/kamari.json";
import enEleni from "./locales/en/eleni.json";
import enEventVenue from "./locales/en/eventVenue.json";
import enLegal from "./locales/en/legal.json";

const resources = {
  el: {
    common: elCommon,
    home: elHome,
    about: elAbout,
    projects: elProjects,
    contact: elContact,
    articles: elArticles,
    kamari: elKamari,
    eleni: elEleni,
    eventVenue: elEventVenue,
    legal: elLegal,
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    projects: enProjects,
    contact: enContact,
    articles: enArticles,
    kamari: enKamari,
    eleni: enEleni,
    eventVenue: enEventVenue,
    legal: enLegal,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "el",
    fallbackLng: "en",
    supportedLngs: ["el", "en"],
    defaultNS: "common",
    ns: [
      "common",
      "home",
      "about",
      "projects",
      "contact",
      "articles",
      "kamari",
      "eleni",
      "eventVenue",
      "legal",
    ],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

const syncDocumentLang = (lng) => {
  document.documentElement.lang = lng?.startsWith("el") ? "el" : "en";
};

syncDocumentLang(i18n.resolvedLanguage || i18n.language);
i18n.on("languageChanged", syncDocumentLang);

export default i18n;
