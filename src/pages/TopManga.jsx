import React, { useContext, useState } from "react";
import { MangaContext } from "../context/MangaContext";
import Card from "../components/Card";

const TopManga = () => {
  const { manga } = useContext(MangaContext);
  console.log(manga);

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(manga.length / ITEMS_PER_PAGE);

  const [index, setIndex] = useState(0);

  const handleCarousel = (direction) => {
    setIndex((prev) => {
      if (direction === "NEXT") return (prev + 1) % totalPages;
      if (direction === "PREV") return (prev - 1 + totalPages) % totalPages;
      return prev;
    });
  };

  const start = index * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  return (
    <section>
      <h1 className="font-bold !text-xl sm:!text-2xl">Top Manga</h1>
      <div className="flex flex-col">
        <ul className="grid grid-cols-5 gap-2 justify-center items-center h-[275px]">
          {manga.slice(start, end).map((manga, index) => (
            <Card manga={manga} key={index} />
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <button
            onClick={() => handleCarousel("PREV")}
            className="w-10 h-full cursor-pointer hover:bg-black/20 top-0 left-0"
          >
            ◀️
          </button>
          <ul className="flex gap-1">
            {Array.from({ length: totalPages }, (v, i) => (
              <li
                className={`w-5 h-5  rounded-full ${
                  index === i ? "bg-gray-400" : "bg-gray-200"
                }`}
              ></li>
            ))}
          </ul>
          <button
            onClick={() => handleCarousel("NEXT")}
            className="w-10 h-full cursor-pointer hover:bg-black/20  top-0 right-0"
          >
            ▶️
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopManga;
