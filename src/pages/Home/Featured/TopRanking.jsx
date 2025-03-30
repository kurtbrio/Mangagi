import React, { useState, useEffect } from "react";
import { fetchManga } from "../../../services/apiService";
import Loader from "../../../components/Loader";

const TopRanking = () => {
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
          order_by: "rank",
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
    <div className="h-full mt-5">
      <h1 className="text-xl">Top Ranking</h1>
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
                className="w-24 sm:w-20 rounded-md object-cover"
              />
              <ul className="w-full flex flex-col gap-2.5 overflow-hidden">
                <li className="line-clamp-1">
                  <a href="">{manga.title_english || manga.title}</a>
                </li>
                <li className="line-clamp-1">
                  <a href="">{manga.title_japanese}</a>
                </li>
                <li>{manga.status}</li>
                <li className="highlight w-fit px-3 text-center rounded-full whitespace-nowrap">
                  Chapters: {manga.chapters || 0}
                </li>
              </ul>
            </li>
          ))}
          <a href="">
            View More <i className="bx bxs-chevron-right"></i>
          </a>
        </ul>
      )}
    </div>
  );
};

export default TopRanking;
