import React, { useEffect, useState } from "react";
import TopScoring from "./TopScoring";
import TopRanking from "./TopRanking";
import MostFavorite from "./MostFavorite";
import MostPopular from "./MostPopular";

const Featured = () => {
  return (
    <section className="h-fit max-w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 text-sm overflow-hidden p-5">
      <TopScoring />
      <TopRanking />
      <MostFavorite />
      <MostPopular />
    </section>
  );
};

export default Featured;
