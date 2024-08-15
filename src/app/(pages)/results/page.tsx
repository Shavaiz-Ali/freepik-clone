import { fetchAllResources, generateImagesByPrompt } from "@/actions";
import Masonary from "@/components/Masonary";
import Wrapper from "@/components/Wrapper";
import React from "react";
interface searchParamsProps {
  searchParams: { search: string | undefined };
}

const page = async ({ searchParams }: searchParamsProps) => {
  const query = searchParams.search;
  const results = await generateImagesByPrompt(query);
  // const results = await fetchByQuery(query);
  console.log(results);
  return (
    <Wrapper className="mt-32">
      {!results || results.length === 0 || results.success === false
        ? "No results"
        : <Masonary response={results}/>}
    </Wrapper>
  );
};

export default page;
