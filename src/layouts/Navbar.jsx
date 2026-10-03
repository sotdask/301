import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Menu from "../components/global/Menu";
import LanguageSwitcher from "../components/global/LanguageSwitcher";

/** All-caps Greek drops the tonos. */
const toNavLabel = (text) =>
  text.normalize("NFD").replace(/\u0301/g, "").toUpperCase();

function Navbar() {
  const { t } = useTranslation("common");

  return (
    <>
      <Menu />
      <nav className="hidden lg:flex" aria-label={t("footer.navigation")}>
        <ul className="flex gap-x-10 text-xl tracking-wider text-white">
          <li>
            <Link
              to="/about"
              className="transition duration-300 hover:text-primary"
            >
              {toNavLabel(t("nav.about"))}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="transition duration-300 hover:text-primary"
            >
              {toNavLabel(t("nav.work"))}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition duration-300 hover:text-primary"
            >
              {toNavLabel(t("nav.contact"))}
            </Link>
          </li>
          <li className="ml-12">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
