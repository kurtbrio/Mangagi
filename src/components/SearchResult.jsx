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
        <ul className="grid gap-5 items-center absolute top-full w-full max-h-60 overflow-y-scroll overflow-hidden p-5 bg-black/10 rounded-b-lg">
          {sorted.map((manga, index) => (
            <li className="grid grid-cols-3" key={index}>
              <img
                src={manga.images.jpg.image_url}
                alt={manga.title}
                className="w-20 h-full object-cover "
              />
              <div className="col-span-2 space-y-2 pl-5">
                <p className="whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {manga.title}
                </p>
                <p>Status: {manga.status}</p>
                <p className="highlight font-semibold text-center rounded-full w-full">
                  Score: {manga.score || "Unranked"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchResult;
