import React, { useMemo } from "react";
import Loader from "./Loader";

const SearchResult = ({ data = [], isLoading }) => {
  const sorted = useMemo(() => {
    return data.sort((a, b) => (b.score || 0) - (a.score || 0));
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center absolute top-full w-full max-h-60  overflow-hidden">
          <Loader />
        </div>
      ) : (
        <ul
          className="grid items-center absolute top-full z-0 w-full max-h-60 overflow-y-scroll"
          id="search"
        >
          {sorted.map((manga, index) => (
            <li key={index}>
              <a href="" className="flex p-2.5 ">
                <img
                  src={manga.images.jpg.image_url}
                  alt={manga.title}
                  className="w-14 h-full object-cover"
                />
                <div className=" space-y-3 pl-5">
                  <div>
                    <p className="line-clamp-1 font-semibold">{manga.title}</p>
                    <p className="line-clamp-1 text-sm">
                      Status: {manga.status}
                    </p>
                  </div>
                  <p className="highlight font-semibold text-center rounded-full w-full line-clamp-1 !text-[#3a3951]">
                    Score: {manga.score || 0}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchResult;
