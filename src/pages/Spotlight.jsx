import React, { useEffect, useState } from "react";

const Spotlight = () => {
  const baseUrl = "https://api.jikan.moe/v4/manga?order_by=rank";

  [results, setResults] = useState([]);

  useEffect(async () => {
    try {
      const response = fetch(baseUrl);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div className="flex overflow-scroll">
          {results.map((manga) => (
            <div key={manga.mal_id} className=" ">
              <img src={manga.images.jpg.image_url} alt="" />
              {manga.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Spotlight;
