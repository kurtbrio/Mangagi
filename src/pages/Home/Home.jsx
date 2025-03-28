import React from "react";
// pages
import Spotlight from "./Spotlight";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <>
      <main className="max-w-screen overflow-x-hidden">
        <Spotlight />
        <Featured />
      </main>
    </>
  );
};

export default Home;
