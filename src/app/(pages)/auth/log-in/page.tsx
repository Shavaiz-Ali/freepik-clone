import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaApple, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
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
         <FcGoogle size={22}/> log in with Google
        </Button>
        <Button
          className="h-12 !rounded-sm flex justify-center items-center bg-transparent text-black gap-x-3
           lg:w-[80%] sm:w-[400px] w-full hover:bg-transparent ring-2 ring-gray-400/40"
        >
         <FaApple size={22}/> log in with Apple
        </Button>
        <Button
          className="h-12 !rounded-sm flex justify-center items-center bg-transparent text-black gap-x-3
           lg:w-[80%] sm:w-[400px] w-full hover:bg-transparent ring-2 ring-gray-400/40"
        >
         <FaEnvelope size={18}/> log in with email
        </Button>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium font-sans text-[#424242]">
        Don’t you have an account?{" "}
          <Link href="/auth/sign-up" className="text-[#336aea] ml-0.5 ">
            Sign Up
          </Link>
        </p>
      </div>
      {/* end */}
      <div className="mt-8">
        <span className="text-sm font-medium font-sans text-[#336aea]">
          Cookie Settings
        </span>
      </div>
    </>
  );
};

export default SignIn;
