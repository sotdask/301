import React, { useEffect, useState } from "react";
import { logo } from "../assets/index";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full">
      <div
        className={`fixed top-0 z-50 flex w-full items-center justify-between section-padding transition-all duration-300 shadow-2xl ${
          isScrolled
            ? "bg-black/95 py-4 shadow-xl backdrop-blur-sm"
            : "bg-transparent py-5"
        }`}
      >
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className={`transition-all duration-300 ${
              isScrolled ? "w-28 md:w-32" : "w-32 md:w-40"
            }`}
          />
        </a>
        <ul className="hidden lg:flex text-xl tracking-wider gap-x-10 text-white">
          <li>
            <a href="#" className="duration-300 transition hover:text-primary">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="duration-300 transition hover:text-primary">
              WORK
            </a>
          </li>
          <li>
            <a href="#" className="duration-300 transition hover:text-primary">
              CONTACT
            </a>
          </li>
          <li className="ml-12">EN | EL</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
