import React from "react";
import Hero from "./hero/Hero";
import HeroSec2 from "./hero/HeroSec2";
import DesignCreation from "./design-creation/DesignCreation";
import Tool from "./tools/Tool";
import Assets from "./assets/Assets";
const Main = () => {
  return (
    <>
      <div className="relative h-[500px] w-screen overflow-hidden">
        <Hero />
      </div>
      {/* hero card */}
      <HeroSec2 />
      <DesignCreation />
      <Tool />
      <Assets />
    </>
  );
};

export default Main;
