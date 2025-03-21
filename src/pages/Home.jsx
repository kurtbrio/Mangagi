import React, { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
// pages
import Spotlight from "./Spotlight";
import TopManga from "./TopManga";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  });

  return (
    <>
      <main className="max-w-screen max-h-screen">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Spotlight />
            <TopManga />
          </>
        )}
      </main>
    </>
  );
};

export default Home;
