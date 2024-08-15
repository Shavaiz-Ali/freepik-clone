"use client";
import { generateImagesByPrompt } from "@/actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const GenerateImages =  () => {
  const [prompt, setPrompt] = useState<string>("");
  const router = useRouter();
  const generate = () => {
    if (!prompt) return;
    router.push(`/results?search=${prompt}`);
  };

  return (
    <div className="w-[90%] md:max-w-[100vh] mx-auto">
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 w-full">
        <input
          type="text"
          className="w-full border border-gray-300/40 rounded text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none py-3 px-4"
          placeholder="Enter your prompt here...."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button className="py-6 px-12" onClick={generate}>
          Generate
        </Button>
      </div>
    </div>
  );
};

export default GenerateImages;
