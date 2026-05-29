import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/kamari/Hero";
import Specs from "../components/kamari/Specs";
import KamariStory from "../components/kamari/KamariStory";

gsap.registerPlugin(ScrollTrigger);

function Kamari() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);

    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <div className="bg-white text-black">
      <Hero />
      <Specs />
      <KamariStory />
    </div>
  );
}

export default Kamari;
