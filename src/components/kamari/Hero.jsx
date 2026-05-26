import React from "react";
import { kamari } from "../../assets";

const Hero = () => {
  return (
    <section className="relative isolate min-h-svh w-full md:min-h-dvh">
      <img
        src={kamari}
        alt=""
        className="brightness-40 pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-svh w-full section-padding">
       <div className="relative wrapper">
        <span  data-aos="fade-right" data-aos-duration="1000" className="block h-0.5 w-28 bg-primary sm:w-46" />
        <h1
          className="tracking-widest text-white uppercase"
          style={{
            fontSize: "clamp(2.8125rem, 1.9818rem + 3.5443vw, 5.4375rem)",
          }}
        >
          Kamari Santorinis
        </h1>
        <span data-aos="fade-left" data-aos-duration="1000" className="block absolute right-0 h-0.5 w-28 bg-primary sm:w-46" />
       </div>
       <span data-aos="fade-up" data-aos-duration="1000" className="block absolute bottom-18 text-white text-xl lg:text-2xl text-center">Where Modernity Meets Greece's Essence</span>
      </div>
    </section>
  );
};

export default Hero;