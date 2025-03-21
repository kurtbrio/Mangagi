import React from "react";
// route
import { Routes, Route } from "react-router-dom";
// context
import { ContextProvider } from "./context/ContextProvider";
// pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default App;
