import React from "react";
import { contact } from "../../assets";

const Hero = () => {
  return (
    <section className="min-h-[50vh] bg-black flex flex-col justify-center pt-28 md:pt-32 lg:pt-36 lg:pb-24">
      <div className="section-padding relative">
        <div className="lg:pr-105 xl:pr-130">
          <h1 className="text-primary text-center font-bold lg:text-start text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Contact Us
          </h1>
          <p className="text-white text-center lg:text-start mt-5 text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>

          <img
            src={contact}
            className="w-full max-w-85 mx-auto -mb-22 mt-8 sm:max-w-95 md:max-w-125 lg:hidden"
            alt="Contact hero"
          />
        </div>

        <img
          src={contact}
          className="hidden lg:block absolute bottom-0 right-16 xl:right-26 w-95 xl:w-125 max-w-none translate-y-[80%] z-20"
          alt="Contact hero"
        />
      </div>
    </section>
  );
};

export default Hero;
