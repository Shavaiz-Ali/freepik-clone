import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full lg:max-w-[1380px] mx-auto xl:p-0 !px-4 h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
