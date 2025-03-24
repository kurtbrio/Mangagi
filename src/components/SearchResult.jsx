import React from "react";
import Loader from "./Loader";

const SearchResult = ({ data = [], isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="flex items-center absolute top-full w-full max-h-60  overflow-hidden">
          <Loader />
        </div>
      ) : (
        <ul className="grid gap-5 items-center absolute top-full w-full max-h-60 overflow-y-scroll overflow-hidden">
          {data.map((manga) => (
            <li className="grid grid-cols-3">
              <img
                src={manga.images.jpg.image_url}
                alt={manga.title}
                className="w-20 h-full object-cover "
              />
              <div className="col-span-2 space-y-2">
                <p className="whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {manga.title}
                </p>
                <p>Status: {manga.status}</p>
                <p className="text-center rounded-full w-full bg-red-500">
                  Chapter {manga.chapters}
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
