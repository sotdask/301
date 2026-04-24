import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Menu() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const handleClick = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        onClick={() => setisMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2"
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
    </div>
  );
}

export default Menu;
