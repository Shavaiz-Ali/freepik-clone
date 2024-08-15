"use client";

import Logo from "@/components/Logo";
import Wrapper from "@/components/Wrapper";
import { navbarData } from "@/constants";
import { useAuthContext } from "@/context/authContext";
import { cn } from "@/lib/utils";
import { navbarDataTypes } from "@/types";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBell, FaChevronCircleDown } from "react-icons/fa";
import { Dropdown } from "./Dropdown";
import { TiChevronRight } from "react-icons/ti";

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  // const [openDropdown, setOpenDropdown] = useState(false);
  const params = usePathname().startsWith("/auth");
  const { user, isAuthenticated } = useAuthContext();
  const difParams = usePathname();
  console.log(difParams);
  if (params) return;
  return (
    <nav
      className={cn("absolute top-0 left-0 z-50 w-full bg-black", {
        "bg-transparent":
          difParams.length <= 1 || difParams === "/tools/ai-image-generator",
      })}
    >
      <Wrapper className="flex justify-between items-center w-full lg:py-5 p-5">
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpenNav(true)}
        >
          <span>
            <Menu size={22} color="#ffffff" />
          </span>
        </div>
        {/* Overlay for the mobile menu */}
        <div
          className={cn(
            "lg:hidden md:block hidden w-full h-screen fixed top-0 left-[-100%] bg-black/40",
            {
              "left-0": openNav,
            }
          )}
        />

        {/* Main Navigation Links */}
        <div
          className={cn(
            "flex lg:justify-center lg:items-center gap-x-8 lg:static fixed left-[-100%] top-0 lg:h-auto h-screen lg:w-auto md:w-[400px] w-full overflow-y-auto lg:bg-transparent bg-black lg:px-0 py-3 px-4",
            {
              "left-0": openNav,
            }
          )}
        >
          <Logo className="xl:block hidden" />

          <div className="relative flex flex-col lg:flex-row justify-start lg:justify-center lg:gap-x-5 gap-y-5">
            <div
              className="mb-5 text-white lg:hidden block cursor-pointer"
              onClick={() => setOpenNav(false)}
            >
              <span>
                <X size={22} color="#ffffff" />
              </span>
            </div>
            {navbarData.map(({ name, id, url }: navbarDataTypes) => (
              <Link
                className={`text-[14px] font-medium tracking-wide text-white ${
                  id === 2845 ? "lg:hidden block !text-[#ffd774]" : ""
                }`}
                key={id}
                href={url}
                onClick={() => setOpenNav(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Pricing, Login, and Sign Up */}
        <div className="flex justify-center items-center gap-x-5 lg:ml-auto">
          <Link
            className="text-[14px] font-medium tracking-wide text-[#ffd774] hidden lg:block"
            href={"#pricing"}
          >
            Pricing
          </Link>
          {user && isAuthenticated ? (
            <>
              <div className="text-white">
                <span>
                  <FaBell />
                </span>
              </div>
              <div
                className="relative flex justify-center items-center cursor-pointer"
                // onClick={() => setOpenDropdown(!openDropdown)}
              >
                <div className="flex justify-center items-center h-6 w-6 rounded-full overflow-hidden cursor-pointer">
                  <img
                    className="object-cover w-full h-full"
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt="user image"
                  />
                </div>
                <span>
                  <TiChevronRight className="rotate-90 text-white" />
                </span>
                {/* {openDropdown && (
                  <>
                    <Dropdown
                      openDropdown={openDropdown}
                      setOpenDropdown={setOpenDropdown}
                    />
                  </>
                )} */}
              </div>
            </>
          ) : (
            <>
              <Link
                className="text-[14px] font-medium tracking-wide text-white "
                href={"/auth/log-in"}
              >
                Login
              </Link>
              <Link
                className="text-[14px] font-medium tracking-wide text-white  border border-white px-3 py-1.5 rounded-sm"
                href={"/auth/sign-up"}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
