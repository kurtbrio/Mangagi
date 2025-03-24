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

  return (
    <section className="w-screen h-screen flex items-center relative">
      {spotlightManga.length > 0 ? (
        <>
          <div className="text-3xl absolute text-white left-0 bg-red-500 w-96 h-96 z-10">
            {spotlightManga[currentIndex].title}
          </div>
          <div className="w-full h-full overflow-hidden  relative">
            <img
              src={spotlightManga[currentIndex]?.images?.jpg?.large_image_url}
              alt={spotlightManga[currentIndex]?.title}
              className="absolute h-full right-10 w-1/2 object-cover"
            />
            <div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-white/1 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-black via-white/1 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-white/1 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-white/1 to-transparent"></div>
            </div>
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
