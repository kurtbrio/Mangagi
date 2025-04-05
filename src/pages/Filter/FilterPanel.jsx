import React, { useState } from "react";

const FilterPanel = () => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    score: "",
    status: "",
    genre: "",
    order_by: "",
    sort: "",
    start_date: "",
    end_date: "",
  });

  console.log(searchQuery);

  const genreOption = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Ecchi",
    "Fantasy",
    "Harem",
    "Hentai",
    "Historical",
    "Horror",
    "Josei",
    "Kids",
    "Magic",
    "Martial Arts",
    "Mecha",
    "Military",
    "Music",
    "Mystery",
    "Parody",
    "Police",
    "Psychological",
    "Romance",
    "Samurai",
    "School",
    "Sci-Fi",
    "Seinen",
    "Shoujo",
    "Shoujo Ai",
    "Shounen",
    "Shounen Ai",
    "Slice of Life",
    "Space",
    "Sports",
    "Super Power",
    "Supernatural",
    "Thriller",
    "Vampire",
    "Yaoi",
    "Yuri",
  ];

  const orderByOption = [
    "mal_id",
    "title",
    "start_date",
    "end_date",
    "chapters",
    "volumes",
    "score",
    "scored_by",
    "rank",
    "popularity",
    "members",
    "favorites",
  ];

  return (
    <section className="w-full max-w-[1200px] p-5 rounded-xl" id="filter">
      <form onSubmit="">
        <div className="flex flex-col gap-5 ">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold">Filter</h2>

            <div className="flex flex-col gap-6">
              <div className="flex gap-x-3">
                <div className="filter-btn">
                  <label>Score</label>
                  <select name="score">
                    <option value="">Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
                <div className="filter-btn">
                  <label>Status</label>
                  <select name="status">
                    <option value="">Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
                <div className="filter-btn">
                  <label>Order By</label>
                  <select name="order_by" className="capitalize">
                    <option value="">Default</option>
                    {orderByOption.map((value) => (
                      <option value={value}>{value}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-x-3">
                <div className="filter-btn ">
                  <label>Start Date</label>
                  <input type="date" />
                </div>
                <div className="filter-btn">
                  <label>End Date</label>
                  <input type="date" />
                </div>
                <div className="filter-btn">
                  <label>Sort</label>
                  <select name="sort">
                    <option value="">Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold">Genre</h2>
            <ul className="flex flex-wrap gap-2">
              {genreOption.map((value, index) => (
                <li key={index}>
                  <button
                    className="filter-btn w-fit px-2 py-1"
                    onClick={() =>
                      setSearchQuery({ ...searchQuery, genre: value })
                    }
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="submit"
          className="primary-btn mt-6 px-2.5 py-1.5 text-sm font-semibold rounded-lg"
        >
          Filter
        </button>
      </form>
    </section>
  );
};

export default FilterPanel;
