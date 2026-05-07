import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/global/Menu";

function Navbar() {
  return (
    <>
      <Menu />
      <nav className="hidden lg:flex">
        <ul className="flex text-xl tracking-wider gap-x-10 text-white">
          <li>
            <Link
              to="/about"
              className="duration-300 transition hover:text-primary"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <a href="/projects" className="duration-300 transition hover:text-primary">
              WORK
            </a>
          </li>
          <li>
            <a href="/contact" className="duration-300 transition hover:text-primary">
              CONTACT
            </a>
          </li>
          <li className="ml-12">EN | EL</li>
        </ul>
      </nav>
      
    </>
  );
}

export default Navbar;
