import React from "react";
import {
  hero,
  arrow,
  facebook,
  instagram,
  tiktok,
} from "../../assets/index.js";

const Hero = () => {
  return (
    <section className="relative h-dvh min-h-dvh w-full overflow-hidden">
      <img
        src={hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
      />
      <div className="absolute w-full flex gap-y-12 flex-col md:flex-row md:justify-between text-center md:text-start section-padding top-1/4 lg:top-1/3">
        <div className="wrapper">
          <div className="wrapper flex items-center gap-x-3 sm:gap-x-5">
            <span className="block h-0.5 w-8 bg-primary sm:w-26" />
            <h4 className="text-primary text-sm tracking-wide sm:text-lg md:text-2xl">
              ARCHITECTURE & INTERIOR DESIGN
            </h4>
          </div>
          <div className="wrapper mt-4 sm:mt-5">
            <h1 className="text-4xl text-white sm:text-5xl md:text-6xl">
              "We Don't Build Structures.
            </h1>
            <h1 className="mt-3 text-4xl italic text-white sm:mt-4 sm:text-5xl md:mt-6 md:text-6xl">
              We Shape Lives."
            </h1>
          </div>
          <p className="my-6 max-w-xl text-lg text-white sm:my-8 md:my-12 md:max-w-150 md:text-xl">
            Explore spaces designed with intention, where every detail carries
            meaning and every room tells a story.
          </p>

          <a
            href="#"
            className="text-sm flex gap-x-3 justify-center md:justify-start uppercase tracking-wider text-primary sm:text-base md:text-xl"
          >
            explore our work
            <img src={arrow} alt="" />
          </a>
        </div>
        <ul className="wrapper flex flex-row md:flex-col justify-center md:justify-end gap-12">
          <li>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={tiktok} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
