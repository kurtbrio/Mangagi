import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { fetchManga } from "../../services/apiService";

const Spotlight = () => {
  const [results, setResults] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // fetch manga data
  useEffect(() => {
    const fetchSpotlightData = async () => {
      const data = await fetchManga({
        limit: 8,
        type: "manga",
        sort: "asc",
        order_by: "popularity",
      });
      setResults(data.data);
    };
    fetchSpotlightData();
  }, []);

  // auto-next spotlight every 5 sec
  useEffect(() => {
    if (results.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length);
    }, [5000]);

    return () => clearTimeout(interval);
  }, [results.length, currentIndex]);

  // handle next
  const handleNext = () => {
    return setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  // handle prev
  const handlePrev = () => {
    return setCurrentIndex(
      (prev) => (prev - 1 + results.length) % results.length
    );
  };

  return (
    <section className="w-screen h-screen flex items-center relative ">
      {results.length > 0 ? (
        <>
          <div className="ml-10 absolute left-0 w-6/12 z-10 space-y-5">
            <h1 className="text-xl">#{currentIndex + 1} Spotlight</h1>
            <p className="text-5xl font-semibold">
              {results[currentIndex].title}
            </p>

            <div className="hidden md:flex flex-wrap gap-5">
              {results[currentIndex].genres.map((theme, index) => (
                <p
                  key={index}
                  className="highlight py-2 px-4 font-bold rounded-full text-xs whitespace-nowrap"
                >
                  {theme.name}
                </p>
              ))}
              <p className="text-lg line-clamp-3">
                {results[currentIndex].synopsis}
              </p>
            </div>
            <a
              className="secondary-btn font-semibold py-2 px-4 text-lg rounded-full"
              href=""
            >
              Detail <i class="bx bxs-chevron-right"></i>
            </a>
          </div>
          <div
            className="w-full h-full overflow-hidden relative"
            id="spotlight"
          >
            <img
              src={results[currentIndex]?.images?.webp.large_image_url}
              alt={results[currentIndex]?.title}
              className="spotlight absolute h-full right-4 w-full lg:w-1/2 object-top object-cover"
            />
          </div>
          <div className="absolute flex flex-col right-[2%] bottom-[10%] text-3xl">
            <button
              onClick={handleNext}
              className="secondary-btn mt-4 w-10 h-10 rounded-lg flex items-center justify-center"
            >
              <i class="bx bx-chevron-right"></i>
            </button>
            <button
              onClick={handlePrev}
              className="secondary-btn mt-4 w-10 h-10 rounded-lg flex items-center justify-center"
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
