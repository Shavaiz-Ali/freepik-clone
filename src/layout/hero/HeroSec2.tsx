import { Button } from "@/components/ui/button";
import React from "react";

const HeroSec2 = () => {
  return (
    <div className="relative w-full h-auto py-6 flex flex-col md:flex-row justify-center items-center md:gap-8 gap-y-4 bg-[#faf6e7]">
      <h3 className="text-sm sm:text-xl font-semibold tracking-tight text-center">
        Sign up for 10 daily free downloads and access to AI tools
      </h3>
      <Button className="px-6 py-6 bg-black text-sm md:text-md md:font-semibold font-medium text-white hover:bg-black">
        Sign up now
      </Button>
    </div>
  );
};

export default HeroSec2;
