import React from "react";
import { abouthero } from "../../assets";

const Hero = () => {
  return (
    <section className="relative h-svh min-h-svh w-full overflow-hidden md:h-dvh md:min-h-dvh">
      <img
        src={abouthero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
      />
    </section>
  );
};

export default Hero;
