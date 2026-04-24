import React from "react";
import { abouthero } from "../../assets";

const Hero = () => {
  return (
    <section className="relative isolate min-h-svh w-full md:min-h-dvh">
      <img
        src={abouthero}
        alt=""
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="relative z-10 grid min-h-svh w-full grid-cols-1 content-start gap-y-12 section-padding pb-12 pt-[20svh] md:pb-16 md:pt-[25svh] lg:grid-cols-2 lg:pt-[33svh]">
        <div className="wrapper flex flex-col items-center lg:items-start">
          <span className="block h-0.5 w-28 bg-primary sm:w-86" />
          <div className="wrapper mt-4 sm:mt-5">
            <h4 className="text-xl text-center lg:text-start text-white italic uppercase tracking-widest sm:text-3xl md:text-4xl">
              more on
            </h4>
            <h2 className="mt-2 text-center lg:text-start text-2xl uppercase text-primary sm:mt-4 sm:text-4xl md:mt-6 md:text-5xl">
              who we are
            </h2>
          </div>
          <p className="my-3 max-w-xl text-base text-white text-center lg:text-start sm:my-8 md:my-12 md:max-w-150 md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="wrapper flex flex-col items-center lg:items-end">
          <span className="block h-0.5 w-28 bg-primary sm:w-86" />
          <div className="wrapper mt-4 sm:mt-5">
            <h4 className="text-xl text-center lg:text-end text-white italic uppercase tracking-widest sm:text-3xl md:text-4xl">
              more on
            </h4>
            <h2 className="mt-2 text-center lg:text-end text-2xl uppercase text-primary sm:mt-4 sm:text-4xl md:mt-6 md:text-5xl">
              what we offer
            </h2>
          </div>
          <p className="my-3 max-w-xl text-base text-white text-center lg:text-end sm:my-8 md:my-12 md:max-w-150 md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
