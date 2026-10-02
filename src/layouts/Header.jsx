import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logo } from "../assets/index";
import Navbar from "./Navbar";

const KNOWN_ROUTES = new Set([
  "/",
  "/about",
  "/projects",
  "/contact",
  "/articles",
  "/articles/architecture-of-santorini",
  "/articles/when-the-roof-becomes-the-architecture",
  "/kamari-santorinis",
  "/elenis-house",
  "/event-venue",
  "/privacy-policy",
  "/cookies-policy",
]);

function Header() {
  const { t } = useTranslation("common");
  const { pathname } = useLocation();
  const isArticlesPage =
    pathname === "/articles" || pathname.startsWith("/articles/");
  const isNotFoundPage = !KNOWN_ROUTES.has(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const showSolidHeader = isScrolled || isArticlesPage || isNotFoundPage;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 shadow-2xl ${
        showSolidHeader
          ? "bg-black/95 py-4 shadow-xl backdrop-blur-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        <Link to="/" aria-label={t("a11y.logoHome")}>
          <img
            src={logo}
            alt={t("brand.studio")}
            className={`transition-all duration-300 ${
              showSolidHeader ? "w-28 md:w-32" : "w-32 md:w-40"
            }`}
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
