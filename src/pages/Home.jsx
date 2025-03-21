import React, { useContext } from "react";
import Loader from "../components/Loader";
import TopManga from "./TopManga";
import { MangaContext } from "../context/MangaContext";

const Home = () => {
  const { loading } = useContext(MangaContext);

  return (
    <>
      <main className="max-w-screen max-h-screen">
        {loading ? <Loader /> : <TopManga />}
      </main>
    </>
  );
};

export default Home;
