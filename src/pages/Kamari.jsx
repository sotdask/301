import React, { useEffect } from "react";
import Hero from "../components/kamari/Hero";
import Specs from "../components/kamari/Specs";
import Body from "../components/kamari/Body";

function Kamari() {
  return (
    <div className="bg-white text-black">
      <Hero />
      <Specs />
      <Body/>
    </div>
  );
}

export default Kamari;
