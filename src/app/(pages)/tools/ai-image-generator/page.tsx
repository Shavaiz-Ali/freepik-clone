import { Metadata } from "next";
import React from "react";
import GenarateImages from "./GenerateImages";

export const metadata: Metadata = {
  title: "AI-Image Genarator",
  description: "AI image generator for free, convert thoughts to reality",
};

const Page = () => {
  return (
    <div className="h-screen w-full bg-[url(/toolsbg/bg.jpg)] bg-cover bg-center flex flex-col justify-center items-center">
      <div className="space-y-2 text-center">
        <h1 className="text-[clamp(2rem,20vw,3rem)] sm:text-[4rem] md:text-[5rem] font-bold text-green-400 leading-[50px] sm:leading-[70px] md:leading-[80px]">
          Text to image with <span className="block">AI Image Generator</span>
        </h1>
        <p className="text-[1rem] sm:text-[2rem] text-white">
          Convert your thoughts into reality in seconds
        </p>
      </div>
      <div className="mt-12 w-full">
        <GenarateImages />
      </div>
    </div>
  );
};

export default Page;
