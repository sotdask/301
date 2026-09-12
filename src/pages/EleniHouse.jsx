import React from 'react'
import Hero from "../components/eleniHouse/Hero";
import Specs from "../components/eleniHouse/Specs";
import Body from "../components/eleniHouse/Body";

function EleniHouse() {
  return (
    <div className="bg-white text-black">
      <Hero />
      <Specs />
      <Body/>
    </div>  )
}

export default EleniHouse