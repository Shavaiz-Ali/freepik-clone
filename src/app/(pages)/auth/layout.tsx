import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Navbar from "@/layout/navbar/Navbar";
import Image from "next/image";
import Logo from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:grid grid-cols-12 items-center w-full lg:h-screen min-h-screen lg:overflow-hidden">
          <div className="lg:col-span-8 relative w-full lg:h-full h-screen">
            <div className="absolute bg-black/30 top-0 left-0 h-full w-full z-[99999]"></div>
            <Image
              className="object-cover w-full h-full"
              fill
              src="/loginbanner.webp"
              alt=""
            />
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center items-center w-full h-full lg:p-0 py-12 sm:px-0 !px-4">
            <Logo className="text-[#336aea]" color="#336aea" />
            {children}
          </div>
        </div>
      </body>   
    </html>
  );
}
