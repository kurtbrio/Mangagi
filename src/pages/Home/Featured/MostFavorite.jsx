import React, { useState, useEffect } from "react";
import { fetchManga } from "../../../services/apiService";
import Loader from "../../../components/Loader";

const MostFavorite = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchManga({
          limit: 5,
          type: "manga",
          sort: "desc",
          order_by: "favorites",
        });
        setResults(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-full">
      <h1 className="text-xl">Most Favorite</h1>
      {loading ? (
        <Loader />
      ) : (
        <ul className="flex flex-col mt-5">
          {results.map((manga, index) => (
            <li
              key={index}
              className="h-32 w-full flex gap-5 border-b-1 mb-3 pb-3"
            >
              <img
                src={manga.images.jpg.image_url}
                alt={manga.title}
                className="w-1/3 sm:w-1/4 rounded-md object-cover"
              />
              <ul className="w-full flex flex-col gap-2.5 overflow-hidden">
                <li className="line-clamp-1">
                  {manga.title_english || manga.title}
                </li>
                <li className="line-clamp-1">{manga.title_japanese}</li>
                <li>{manga.status}</li>
                <li className="highlight w-full text-center rounded-full whitespace-nowrap">
                  Chapters: {manga.chapters || 0}
                </li>
              </ul>
            </li>
          ))}
          <a href="">View More.</a>
        </ul>
      )}
    </div>
  );
};

export default MostFavorite;
