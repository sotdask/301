import React from "react";
import Hero from "../components/eventVenue/Hero";
import Specs from "../components/eventVenue/Specs";
import Body from "../components/eventVenue/Body";

function EventVenue() {
  return (
    <div className="bg-white text-black">
      <Hero />
      <Specs />
      <Body />
    </div>
  );
}

export default EventVenue;
