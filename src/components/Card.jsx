import React from "react";

const Card = ({ manga }) => {
  const imgUrl = manga.images.jpg.image_url;
  const title = manga.title_english || manga.title;

  return (
    <li className="flex flex-col text-center items-center h-full w-full">
      <img src={imgUrl} className="w-40 h-60 object-cover" />
      <h2 className="line-clamp-2 max-w-40 text-xs sm:text-sm;">{title}</h2>
    </li>
  );
};

export default Card;
