import React from "react";
import MangaContextProvider from "./MangaContext";

const ContextProvider = ({ children }) => {
  return <MangaContextProvider>{children}</MangaContextProvider>;
};

export { ContextProvider };
