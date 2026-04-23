import React from "react";
import Hero from "../components/homepage/Hero";
import Info from "../components/homepage/Info";
import Parallax from "../components/homepage/Parallax"
import Work from "../components/homepage/Work";
import Blog from "../components/homepage/Blog";

function Home() {
  return (
    <div>
      <Hero />
      <Info/> 
      <Parallax/>
      <Work/>
      <Blog/>
    </div>
  );
}

export default Home;