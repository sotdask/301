import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black px-6 pt-32 pb-20 text-center text-white">
      <p className="text-primary text-sm uppercase tracking-[0.35em] md:text-base">
        301 Architecture Studio
      </p>
      <h1 className="mt-6 text-[clamp(5rem,18vw,12rem)] font-bold leading-none text-primary">
        404
      </h1>
      <h2 className="mt-4 text-2xl uppercase md:text-3xl lg:text-4xl">
        Page not found
      </h2>
      <p className="mt-6 max-w-lg text-base text-white/80 md:text-lg">
        The page you are looking for does not exist or may have been moved.
        Return home or explore our work.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <Link
          to="/"
          className="border-2 border-primary px-8 py-3 text-sm uppercase tracking-wider text-primary transition duration-300 hover:bg-primary hover:text-black md:text-base"
        >
          Back to home
        </Link>
        <Link
          to="/projects"
          className="text-sm uppercase tracking-wider text-white/80 transition duration-300 hover:text-primary md:text-base"
        >
          View our work
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
