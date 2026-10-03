import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  DEFAULT_OG_IMAGE,
  PAGE_META,
  SITE_NAME,
  SITE_URL,
} from "../../seo/config";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Updates document title + meta/OG tags per route (for Google & in-app previews).
 * Static defaults in index.html still cover crawlers that skip JS.
 */
function DocumentMeta() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation("common");
  const lng = (i18n.resolvedLanguage || i18n.language || "el").startsWith("el")
    ? "el"
    : "en";

  useEffect(() => {
    const meta = PAGE_META[pathname];
    const title = meta
      ? t(meta.titleKey)
      : t("seo.notFound.title");
    const description = meta
      ? t(meta.descriptionKey)
      : t("seo.notFound.description");
    const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
    const fullTitle =
      pathname === "/" ? title : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);
    upsertMeta("property", "og:image:width", "1440");
    upsertMeta("property", "og:image:height", "918");
    upsertMeta("property", "og:image:alt", "Outdoor dining terrace by 301 Architecture Studio");
    upsertMeta("property", "og:locale", lng === "el" ? "el_GR" : "en_US");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
    upsertLink("canonical", url);

    document.documentElement.lang = lng;
  }, [pathname, t, lng]);

  return null;
}

export default DocumentMeta;
