import React from "react";
import { MangaContextProvider } from "./MangaContext";
import { ThemeContextProvider } from "./ThemeContext";
import { SearchContextProvider } from "./SearchContext";

const ContextProvider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <SearchContextProvider>
        <MangaContextProvider>{children}</MangaContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
};

export { ContextProvider };
