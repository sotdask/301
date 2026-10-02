import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Menu from "../components/global/Menu";
import LanguageSwitcher from "../components/global/LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation("common");

  return (
    <>
      <Menu />
      <nav className="hidden lg:flex">
        <ul className="flex gap-x-10 text-xl tracking-wider text-white">
          <li>
            <Link
              to="/about"
              className="transition duration-300 hover:text-primary"
            >
              {t("nav.about").toUpperCase()}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="transition duration-300 hover:text-primary"
            >
              {t("nav.work").toUpperCase()}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition duration-300 hover:text-primary"
            >
              {t("nav.contact").toUpperCase()}
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
