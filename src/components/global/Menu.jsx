import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Menu() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const menuItems = ["ABOUT", "WORK", "CONTACT"];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setisMenuOpen(!isMenuOpen)}
        className="p-2 relative z-70"
        aria-label="Menu"
      >
        <div className="relative w-6 h-6">
          <HiOutlineMenuAlt3
            className={`absolute inset-0 text-4xl text-white transition-all duration-300 
            ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
          />

          <IoMdClose
            className={`absolute inset-0 text-4xl text-white transition-all duration-300 
            ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-60 bg-black/40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setisMenuOpen(false)}
      />

      <div
        className={`fixed flex flex-col items-center justify-center gap-32 top-0 left-0 h-screen right-0 z-65 bg-black/95 backdrop-blur-md transition-transform duration-500 ease-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-y-16 text-white text-xl tracking-wider">
          {menuItems.map((label, index) => (
            <li
              key={label}
              className={`transition-all duration-500 ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 90}ms` : "0ms" }}
            >
              <button
                type="button"
                onClick={() => setisMenuOpen(false)}
                className="bg-transparent cursor-pointer uppercase tracking-wider text-xl text-white hover:text-primary transition duration-300"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <a href="#" className="flex text-xl tracking-wider text-primary">EN | EL</a>
      </div>
    </div>
  );
}

export default Menu;
