import Logo from "@/components/Logo";
import SearchBox from "@/components/SearchBox";
import Wrapper from "@/components/Wrapper";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className='relative h-full w-full bg-[url("/hero.jpg")] bg-cover bg-center'>
        <div className="absolute top-0 left-0 h-full w-full bg-black/50" />
        <Wrapper className="relative w-full h-full flex flex-col gap-y-4 justify-center items-center text-white">
          <Logo className="xl:hidden block" />
          <div className="space-y-3 text-center">
            <h1 className="text-[1.5rem] lg:text-[2.5rem] font-semibold leading-tight">
              Create great designs, faster
            </h1>
            <p className="text-sm sm:text-md lg:text-lg font-medium tracking-wide">
              High-quality photos, videos, vectors, PSD, AI images, icons... to
              go from ideas to outstanding designs
            </p>
          </div>
          <SearchBox />
        </Wrapper>
      </div>
    </>
  );
};

export default Hero;
