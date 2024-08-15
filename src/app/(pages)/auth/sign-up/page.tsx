
import type { Metadata } from "next";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "sign-up",
  description:
    "Discover the best free vector graphics, icons, and designs from around the world.",
};

const Page = () => {
  
  return (
    <>
        <SignUpForm />
    </>
  );
};

export default Page;
