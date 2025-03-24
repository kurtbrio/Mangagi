import React, { useContext, useState } from "react";
import { SpotlightContext } from "../../context/SpotlightContext";
import Loader from "../../components/Loader";

const Spotlight = () => {
  const { state } = useContext(SpotlightContext);
  const { results } = state;

  const spotlightManga = results.slice(0, 8);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carousel = () => {
    setCurrentIndex((prev) => (prev + 1) % spotlightManga.length);
  };

  console.log(spotlightManga);

  return (
    <section className="w-screen h-screen flex items-center relative">
      {spotlightManga.length > 0 ? (
        <>
          <div className="ml-10 absolute text-white left-0 w-1/2 z-10 space-y-5">
            <p className="text-xl">#{currentIndex + 1} Spotlight</p>
            <h1 className="text-5xl">{spotlightManga[currentIndex].title}</h1>
            <div className="flex flex-wrap gap-5">
              {spotlightManga[currentIndex].genres.map((theme) => (
                <p className="py-2 px-4 bg-red-500 rounded-full text-xs whitespace-nowrap">
                  {theme.name}
                </p>
              ))}
            </div>
            <p className="text-lg line-clamp-3">
              {spotlightManga[currentIndex].synopsis}
            </p>
            <a className="py-2 px-4 bg-red-500 text-lg rounded-full" href="">
              Detail <i class="bx bxs-chevron-right"></i>
            </a>
          </div>
          <div className="w-full h-full  overflow-hidden relative">
            <img
              src={spotlightManga[currentIndex]?.images?.jpg?.large_image_url}
              alt={spotlightManga[currentIndex]?.title}
              className="absolute h-full shadow-2xl shadow-black right-0 w-1/2 object-top object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-white/1 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-white/1 to-transparent"></div>
          </div>
          <div className="absolute right-0">
            <button
              onClick={carousel}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Spotlight;
