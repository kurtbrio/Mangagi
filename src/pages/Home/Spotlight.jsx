import React, { useContext, useEffect, useState } from "react";
import { SpotlightContext } from "../../context/SpotlightContext";
import Loader from "../../components/Loader";

const Spotlight = () => {
  const { state } = useContext(SpotlightContext);
  const { results } = state;

  const spotlightManga = results.slice(0, 8);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (spotlightManga.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % spotlightManga.length);
    }, [5000]);
    return () => clearTimeout(interval);
  }, [spotlightManga.length, currentIndex]);

  const handleNext = () => {
    return setCurrentIndex((prev) => (prev + 1) % spotlightManga.length);
  };

  const handlePrev = () => {
    return setCurrentIndex(
      (prev) => (prev - 1 + spotlightManga.length) % spotlightManga.length
    );
  };

  return (
    <section className="w-screen h-screen flex items-center relative">
      {spotlightManga.length > 0 ? (
        <>
          <div className="ml-10 absolute left-0 w-6/12 z-10 space-y-5">
            <h1 className="text-xl">#{currentIndex + 1} Spotlight</h1>
            <p className="text-5xl">{spotlightManga[currentIndex].title}</p>

            <div className="hidden md:flex flex-wrap gap-5">
              {spotlightManga[currentIndex].genres.map((theme, index) => (
                <p
                  key={index}
                  className="py-2 px-4 bg-[#ffbade] text-[#3a3951] font-bold rounded-full text-xs whitespace-nowrap"
                >
                  {theme.name}
                </p>
              ))}
              <p className="text-lg line-clamp-3">
                {spotlightManga[currentIndex].synopsis}
              </p>
            </div>
            <a className="py-2 px-4 bg-[#3a3951] text-lg rounded-full" href="">
              Detail <i class="bx bxs-chevron-right"></i>
            </a>
          </div>
          <div className="w-full h-full  overflow-hidden relative ">
            <img
              src={spotlightManga[currentIndex]?.images?.webp.large_image_url}
              alt={spotlightManga[currentIndex]?.title}
              className="absolute h-full right-4 w-full lg:w-1/2 object-top object-cover"
            />

            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-[#201f31]/80 via-transparent to-[#201f31]/80"></div>
          </div>
          <div className="absolute flex flex-col right-[1%] bottom-[10%] text-3xl">
            <button
              onClick={handleNext}
              className="mt-4 w-10 h-10 bg-[#3a3951] text-white rounded-lg"
            >
              <i class="bx bx-chevron-right"></i>
            </button>
            <button
              onClick={handlePrev}
              className="mt-4 w-10 h-10 bg-[#3a3951] text-white rounded-lg"
            >
              <i class="bx bx-chevron-left"></i>
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
