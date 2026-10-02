export const SITE_NAME = "301 Architecture Studio";
export const SITE_TAGLINE = "Architecture & Interior Design";

/** Absolute site origin — set VITE_SITE_URL in .env for production */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://301-dusky.vercel.app"
).replace(/\/+$/, "");

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const CONTACT_EMAIL = "301archstudio@gmail.com";

export const PAGE_META = {
  "/": { titleKey: "seo.home.title", descriptionKey: "seo.home.description" },
  "/about": {
    titleKey: "seo.about.title",
    descriptionKey: "seo.about.description",
  },
  "/projects": {
    titleKey: "seo.projects.title",
    descriptionKey: "seo.projects.description",
  },
  "/contact": {
    titleKey: "seo.contact.title",
    descriptionKey: "seo.contact.description",
  },
  "/articles": {
    titleKey: "seo.articles.title",
    descriptionKey: "seo.articles.description",
  },
  "/articles/architecture-of-santorini": {
    titleKey: "seo.articleSantorini.title",
    descriptionKey: "seo.articleSantorini.description",
  },
  "/articles/when-the-roof-becomes-the-architecture": {
    titleKey: "seo.articleRoof.title",
    descriptionKey: "seo.articleRoof.description",
  },
  "/kamari-santorinis": {
    titleKey: "seo.kamari.title",
    descriptionKey: "seo.kamari.description",
  },
  "/elenis-house": {
    titleKey: "seo.eleni.title",
    descriptionKey: "seo.eleni.description",
  },
  "/event-venue": {
    titleKey: "seo.eventVenue.title",
    descriptionKey: "seo.eventVenue.description",
  },
  "/privacy-policy": {
    titleKey: "seo.privacy.title",
    descriptionKey: "seo.privacy.description",
  },
  "/cookies-policy": {
    titleKey: "seo.cookies.title",
    descriptionKey: "seo.cookies.description",
  },
};
