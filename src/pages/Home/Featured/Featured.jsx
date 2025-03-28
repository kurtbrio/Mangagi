import React, { useEffect, useState } from "react";
import TopScoring from "./TopScoring";
import TopRanking from "./TopRanking";
import MostFavorite from "./MostFavorite";
import MostPopular from "./MostPopular";

const Featured = () => {
  return (
    <section className="h-fit w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 p-5 text-sm">
      <TopScoring />
      <TopRanking />
      <MostFavorite />
      <MostPopular />
    </section>
  );
};

export default Featured;
