import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  hero,
  arrow,
  facebook,
  instagram,
  tiktok,
} from "../../assets/index.js";

const Hero = () => {
  const { t } = useTranslation("home");
  const { t: tc } = useTranslation("common");

  return (
    <section className="relative isolate min-h-svh w-full md:min-h-dvh">
      <img
        src={hero}
        alt=""
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
      />
      <div className="relative z-10 flex min-h-svh w-full flex-col justify-start gap-y-12 pb-12 pt-[25svh] text-center section-padding md:flex-row md:items-center md:justify-between md:text-start lg:pt-[33svh]">
        <div className="wrapper">
          <div data-aos="fade-up" data-aos-duration="800" className="wrapper flex items-center gap-x-3 sm:gap-x-5">
            <span className="block h-0.5 w-8 bg-primary sm:w-26" />
            <h4 className="text-sm tracking-wide text-primary sm:text-lg md:text-2xl">
              {t("hero.tagline")}
            </h4>
          </div>
          <div className="wrapper mt-4 sm:mt-5">
            <h1 trig-target className="text-4xl text-white sm:text-5xl md:text-6xl">
              {t("hero.line1")}
            </h1>
            <h1 className="mt-3 text-4xl italic text-white sm:mt-4 sm:text-5xl md:mt-6 md:text-6xl">
              {t("hero.line2")}
            </h1>
          </div>
          <p className="my-6 max-w-xl text-lg text-white sm:my-8 md:my-12 md:max-w-150 md:text-xl">
            {t("hero.body")}
          </p>

          <Link
            to="/projects"
            className="flex justify-center gap-x-3 text-sm uppercase tracking-wider text-primary transition duration-300 hover:translate-x-3 sm:text-base md:justify-start md:text-xl"
          >
            {tc("common.exploreWork")}
            <img src={arrow} alt="" />
          </Link>
        </div>
        <ul className="wrapper flex flex-row justify-center gap-12 md:flex-col md:justify-end">
          <li>
            <a href="#">
              <img src={facebook} alt="" className="opacity-70 transition duration-300 hover:scale-110" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="" className="opacity-70 transition duration-300 hover:scale-110" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={tiktok} alt="" className="opacity-70 transition duration-300 hover:scale-110" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
