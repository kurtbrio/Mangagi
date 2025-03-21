import React from "react";
import { ContextProvider } from "./context/ContextProvider";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Home />
      </ContextProvider>
    </>
  );
};

export default App;
