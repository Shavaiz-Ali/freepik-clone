import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CreateAnAccountPage = () => {
  return (
    <>
      <div className="my-8">
        <span className="text-[#424242] text-[21px] font-semibold">
          Create an account
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-4 w-full">
        <Button
          className="h-12 !rounded-sm flex justify-center items-center bg-transparent text-black gap-x-3
           lg:w-[80%] sm:w-[400px] w-full hover:bg-transparent ring-2 ring-gray-400/40"
        >
          log in with Google
        </Button>
        <Button
          className="h-12 !rounded-sm flex justify-center items-center bg-transparent text-black gap-x-3
           lg:w-[80%] sm:w-[400px] w-full hover:bg-transparent ring-2 ring-gray-400/40"
        >
          log in with Apple
        </Button>
        <Button
          className="h-12 !rounded-sm flex justify-center items-center bg-transparent text-black gap-x-3
           lg:w-[80%] sm:w-[400px] w-full hover:bg-transparent ring-2 ring-gray-400/40"
        >
          log in with email
        </Button>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium font-sans text-[#424242]">
          Already have an account?{" "}
          <Button className="bg-transparent text-[#336aea] m-0 p-0 hover:bg-transparent">
            Log In
          </Button>
        </p>
      </div>
    </>
  );
};

export default CreateAnAccountPage;
