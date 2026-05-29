import React from "react";
import { loadinglogo } from "../../assets";

const LoadingScreen = ({ exiting = false }) => {
  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-black transition-opacity duration-700 ease-out ${
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={exiting}
      aria-label="Loading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)]" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="animate-loading-fade-in flex flex-col items-center gap-6">
          <span className="block h-px w-16 bg-primary sm:w-24" />

          <img
            src={loadinglogo}
            alt="301 Architecture & Interior Design"
            className="w-40 sm:w-48 md:w-56"
          />

          <span className="block h-px w-16 bg-primary sm:w-24" />
        </div>

        <p
          className="animate-loading-fade-in mt-10 text-xs uppercase tracking-[0.35em] text-primary sm:text-sm"
          style={{ animationDelay: "0.15s" }}
        >
          Architecture & Interior Design
        </p>

        <div
          className="animate-loading-fade-in relative mt-14 h-px w-48 overflow-hidden bg-white/10 sm:w-64"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="absolute inset-0 origin-left bg-primary animate-loading-bar" />
          <span className="absolute inset-y-0 w-1/3 bg-linear-to-r from-transparent via-white/40 to-transparent animate-loading-shimmer" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
