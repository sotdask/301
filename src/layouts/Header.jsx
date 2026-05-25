import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { logo } from "../assets/index";
import Menu from "../components/global/Menu";
import Navbar from "./Navbar";

function Header() {
  const { pathname } = useLocation();
  const isArticlesPage = pathname === "/articles";
  const [isScrolled, setIsScrolled] = useState(false);
  const showSolidHeader = isScrolled || isArticlesPage;

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
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className={`transition-all duration-300 ${
              showSolidHeader ? "w-28 md:w-32" : "w-32 md:w-40"
            }`}
          />
        </a>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
