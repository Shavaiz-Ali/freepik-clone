"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (query?: string) => {
    if (!search || search.trim().length === 0) return;
    router.push(`/results?search=${search || query}`);
  };

  return (
    <>
      <div className="lg:grid flex justify-center grid-cols-12 gap-x-3 items-center bg-white rounded-sm shadow-sm px-2 lg:w-[1000px] h-[55px] w-full mt-8">
        <div className="col-span-2 flex sm:justify-between items-center sm:gap-0 gap-x-3 border-r border-r-gray-400/50 h-full lg:w-full sm:w-[300px] px-3 cursor-pointer">
          <div className="flex justify-center items-center gap-x-2 text-black select-none">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-49 141 512 512"
                width="16"
                height="16"
                aria-hidden="true"
                className="_24ydrq0 _1h8m6m07 _1286nb164b _1286nb11m _1286nb12qe _1286nb11hk"
              >
                <path d="M437.838 214.25h-200c-13.807 0-25 11.193-25 25v59.933L142.151 176.75a25 25 0 0 0-43.3 0l-144.339 250a25 25 0 0 0 21.651 37.5h121.15a135 135 0 0 0-3.475 30.5c0 74.439 60.561 135 135 135s135-60.561 135-135c0-10.486-1.202-20.696-3.475-30.5h77.475c13.807 0 25-11.193 25-25v-200c0-13.807-11.193-25-25-25m-418.374 200 101.037-175 72.383 125.369c-29.306 8.107-54.642 25.865-72.352 49.631zm209.374 165.5c-46.869 0-85-38.131-85-85s38.131-85 85-85 85 38.131 85 85-38.131 85-85 85m184-165.5h-75.693c-18.103-24.293-44.173-42.314-74.307-50.161V264.25h150z"></path>
              </svg>
            </span>
            <span className="text-sm font-medium sm:block hidden">Assets</span>
          </div>
          <span>
            <ChevronDown size={16} color="#000000" />
          </span>
        </div>
        <div className="col-span-8 flex justify-betwe en items-center w-full h-full">
          <input
            className="w-full h-full outline-none text-sm text-black font-medium px-3"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search all assets"
            // onKeyUp={handleSearch}
          />
          <span
            className={cn(
              "hidden border-r h-[50%] justify-center items-center border-r-gray-400 px-3",
              {
                flex: search.trim() !== "",
              }
            )}
          >
            <X size={16} color="#000000" />
          </span>
        </div>
        <div className="col-span-2 text-black flex lg:justify-center justify-end items-center gap-x-2 w-full">
          <span className="h-[40px] w-[60px] border border-gray-400 rounded hidden md:flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
              aria-hidden="true"
              className="_24ydrq0 _1286nb14b _1286nb12q2"
            >
              <path d="M150.9 301.8c83.3 0 150.9-67.6 150.9-150.9S234.2 0 150.9 0 0 67.6 0 150.9s67.6 150.9 150.9 150.9m19.4-178.9V227c0 11-8.9 19.9-19.9 19.9s-19.9-8.9-19.9-19.9V122.9L97 156.4c-7.8 7.8-20.3 7.8-28.1 0s-7.8-20.4 0-28.2l67.5-67.6c3.7-3.7 8.8-5.8 14.1-5.8s10.3 2.1 14.1 5.8l67.5 67.6c7.8 7.8 7.8 20.4 0 28.2s-20.4 7.8-28.1 0zm-20.2 213.5V446c0 36.3 29.6 65.9 65.9 65.9h230.1c36.3 0 65.9-29.6 65.9-65.9V215.8c0-36.3-29.5-65.9-65.9-65.9H337.4c0 17.6-2.4 34.6-7 50.7h115.7c8.4 0 15.2 6.8 15.2 15.2V414l-18.7-19c-4.8-4.9-11.4-7.6-18.1-7.6-6.8 0-13.4 2.8-18 7.7l-34.4 35.5-87.5-88c-9.8-9.9-25.9-9.9-35.8-.1L200.9 390v-60.5c-15.9 4.4-32.7 6.8-50 6.8-.3.1-.5.1-.8.1m226.3-86.9c-20.4 0-37 16.5-37 37s16.6 37 37 37 37-16.6 37-37c.1-20.3-16.6-37-37-37"></path>
            </svg>
          </span>
          <Button
            className="flex justify-center items-center gap-x-2 h-[40px] lg:w-full md:w-[100px] w-[40px] bg-blue-600 text-white text-sm font-medium rounded"
            onClick={() => handleSearch()}
          >
            <span>
              <Search size={16} />
            </span>
            <span className="md:block hidden">Search</span>
          </Button>
        </div>
      </div>
      <div className="mt-3 flex sm:flex-nowrap flex-wrap justify-center items-center sm:gap-x-4 gap-2">
        {["ai", "anime", "html css"].map((item, index) => (
          <div
            className="flex justify-center items-center gap-x-2 bg-[#ffffff33] backdrop-blur-[2px] sm:px-4 px-3 py-2 rounded text-sm sm:font-semibold font-medium cursor-pointer select-none"
            key={index}
            // onClick={() => handleSearch(item)}
          >
            <span>
              <Search size={16} />
            </span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBox;
