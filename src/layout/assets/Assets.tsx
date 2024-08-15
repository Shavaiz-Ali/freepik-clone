import ImageCarousel from "@/components/ImageCarousel";
import Wrapper from "@/components/Wrapper";
import { assetsData } from "@/constants";
import React from "react";

const Assets = () => {
  return (
    <Wrapper className="mb-12">
      <div className="mb-4">
        <h3 className="text-sm sm:text-md lg:text-[1.5rem] sm:text-lg font-semibold">
          Millions of assets ready to go
        </h3>
      </div>
      <ImageCarousel data={assetsData}/>
    </Wrapper>
  );
};

export default Assets;
