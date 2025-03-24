import React from "react";
// contexts
import ThemeContextProvider from "./ThemeContext";
import SearchContextProvider from "./SearchContext";
import SpotlightContextProvider from "./SpotlightContext";

const ContextProvider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <SearchContextProvider>
        <SpotlightContextProvider>{children}</SpotlightContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
};

export default ContextProvider;
