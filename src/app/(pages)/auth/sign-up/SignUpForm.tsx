"use client";
import { signup } from "@/actions";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || formData.email.trim() === "") {
      alert("Please enter an email");
      return;
    } else if (!formData.password || formData.password.trim() === "") {
      alert("Please enter a password");
      return;
    }

    const res = await signup(formData.email, formData.password);
    if (res?.status === 201) {
        window.location.href = "/"
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-8">
      <div className="text-[#424242] text-[21px] font-semibold mb-8 text-center">
        Create an account
      </div>
      <form onSubmit={handleSignUp}>
        <div className="flex flex-col gap-y-1">
          <label className="text-sm text-[#777] font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full lg:w-[350px] sm:w-[70%] border border-gray-600/50 focus:border-none rounded focus:ring-[1.5px] focus:ring-[#336AEA] focus:outline-none px-2 py-3"
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col gap-y-1 my-5">
          <label
            className="text-sm text-[#777] font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="w-full lg:w-[350px] sm:w-[70%] border border-gray-600/50 focus:border-none rounded focus:ring-[1.5px] focus:ring-[#336AEA] focus:outline-none px-2 py-3"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleOnChange}
            />
            <span className="absolute right-4 z-50 top-1/2 -translate-y-1/2 cursor-pointer">
              {showPassword ? (
                <FaEye
                  size={16}
                  className="text-gray-600/50"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  size={16}
                  className="text-gray-600/50"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full lg:w-[350px] sm:w-[70%] bg-[#336AEA] py-3 rounded-md text-white text-sm font-semibold"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-6 text-center w-full mx-auto">
        <p className="text-sm font-medium font-sans text-[#424242]">
          Already have an acccount?{" "}
          <Link href="/auth/log-in" className="text-[#336aea] ml-0.5 ">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
