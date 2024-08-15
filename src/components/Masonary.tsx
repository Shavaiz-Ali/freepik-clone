/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface resultsProps {
  response: {
    results: {
      images: [];
    };
  };
}

const Masonary = ({ response }: resultsProps) => {
  console.log(response);
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4, 1280: 5 }}
    >
      <Masonry>
        {response.results.images.slice(10, 50).map((item, index) => (
          <div key={index} className="mb-16">
            <img src={item} alt={""} />
            {/* <h3>{item.title}</h3> */}
            {/* <p>{item.description}</p> */}
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Masonary;
