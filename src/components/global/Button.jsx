import React from "react";
import { Link } from "react-router-dom";

function Button({ to, text, title }) {
  return (
    <Link
      to={to}
      className="relative inline-block px-6 py-3 border-2 border-black text-black overflow-hidden group"
      title={title}
    >
      <span className="relative z-10 transition-colors duration-400 group-hover:text-white">
        {text}
      </span>
      <span
        className="absolute top-0 left-[-10%] h-full w-0 bg-black -skew-x-12 origin-left transition-all duration-400 group-hover:w-[120%]"
        aria-hidden="true"
      />
    </Link>
  );
}

export default Button;
