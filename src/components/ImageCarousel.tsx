import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toolsCarouselDataTypes } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaAngleRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ImageCarousel = ({ data }: { data: toolsCarouselDataTypes[] }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1 space-x-3">
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-1 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
          >
            <Link href={item.link ? item.link : "#"} className="p-1">
              <Card
                className={cn(
                  "group overflow-hidden rounded-xl cursor-pointer",
                  {
                    "bg-[#f7f7f7] border-none hover:bg-[#e7e7e7a7]":
                      !item.image,
                  }
                )}
              >
                <CardContent
                  className={cn(
                    "relative flex aspect-[5/4.2] items-center justify-center p-6",
                    {
                      "aspect-[5/3]": !item.description,
                    }
                  )}
                >
                  {item.image ? (
                    <>
                      <div className="absolute w-full h-full top-0 left-0 hover:scale-110 duration-300">
                        <div className="relative w-full h-full">
                          <div
                            className={cn(
                              "absolute top-0 left-0 h-full w-full group-hover:bg-black/40 z-50",
                              {
                                "bg-black/40 group-hover:bg-none":
                                  !item.description,
                              }
                            )}
                          ></div>
                        </div>
                        <Image src={item.image} alt={item.title} fill />
                      </div>
                      <CardTitle
                        className={cn(
                          "absolute top-5 left-5 text-white text-sm font-semibold tracking-wide z-[9999]",
                          {
                            "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-semibold":
                              !item.description,
                          }
                        )}
                      >
                        <span>{item.title}</span>
                      </CardTitle>
                      {item.description && (
                        <CardDescription className="absolute top-11 left-5 text-white text-[12px] font-medium hidden group-hover:block z-[99999]">
                          <span>{item.description}</span>
                        </CardDescription>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col justify-center items-center gap-y-2">
                      <CardDescription className="text-center text-black text-sm">
                        <span>{item.description}</span>
                      </CardDescription>
                      <CardTitle className="text-sm font-semibold tracking-wide z-[9999]">
                        <Button
                          variant="link"
                          className="text-[#336aea] hover:no-underline hover:border-none hover:list-none text-sm sm:text-md font-medium flex justify-center items-center gap-x-1"
                        >
                          <span>{item.title}</span>
                          <FaAngleRight />
                        </Button>
                      </CardTitle>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
