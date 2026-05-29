import React from "react";
import { kamari } from "../../assets";

const Hero = () => {
  return (
    <section className="relative isolate min-h-svh w-full md:min-h-dvh">
      <img
        src={kamari}
        alt=""
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-40"
      />
      <div className="relative z-10 flex min-h-svh w-full flex-col items-center justify-center section-padding pb-24 pt-32 text-center">
        <div className="relative">
          <span
            data-aos="fade-right"
            data-aos-duration="1000"
            className="block h-0.5 w-28 bg-primary sm:w-46"
          />
          <h1
            className="tracking-widest text-white uppercase"
            style={{
              fontSize: "clamp(2.8125rem, 1.9818rem + 3.5443vw, 5.4375rem)",
            }}
          >
            Kamari Santorinis
          </h1>
          <span
            data-aos="fade-left"
            data-aos-duration="1000"
            className="absolute right-0 block h-0.5 w-28 bg-primary sm:w-46"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-10 max-w-xl text-xl text-white lg:text-2xl"
        >
          Where Modernity Meets Greece&apos;s Essence
        </p>
      </div>
    </section>
  );
};

export default Hero;
