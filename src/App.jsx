import React from "react";
// route
import { Routes, Route, Navigate } from "react-router-dom";
// context
import ContextProvider from "./context/ContextProvider";
// pages
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Filter from "./pages/Filter/Filter";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default App;
