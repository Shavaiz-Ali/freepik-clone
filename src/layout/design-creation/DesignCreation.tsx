import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const DesignCreation = () => {
  return (
    <Wrapper className="w-full mb-12 mt-8 !overflow-x-hidden">
      <div className="mb-4 flex flex-wrap sm:flex-wrap justify-between items-center w-full">
        <h3 className="text-sm sm:text-md lg:text-[1.5rem] sm:text-lg font-semibold">
          Here&apos;s where you left off
        </h3>
        <div className="flex justify-center items-center">
          <Button
            variant="link"
            className="text-[#336aea] hover:no-underline hover:border-none hover:list-none text-sm sm:text-md font-medium flex justify-center items-center gap-x-1"
          >
            <span> Go to Projects</span>
            <FaAngleRight />
          </Button>
        </div>
      </div>
      <div className="flex justify-center sm:justify-between items-center rounded-md bg-[#f0f4fd] p-4 sm:p-8 !overflow-x-hidden">
        <div className="space-y-6">
          <h3 className="text-md sm:text-lg font-semibold">
            No designs to show yet
            <span className="text-sm sm:text-md block mt-2 font-normal">
              Let&apos;s change that!
            </span>
          </h3>
          <div>
            <Button className="px-8 py-6">Start Creating</Button>
          </div>
        </div>
        <div className="hidden sm:block">
            <Image src={"/design.png"} alt="" height={150} width={150}/>
        </div>
      </div>
    </Wrapper>
  );
};

export default DesignCreation;
