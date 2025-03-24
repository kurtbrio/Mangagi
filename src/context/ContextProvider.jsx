import React from "react";
// contexts
import ThemeContextProvider from "./ThemeContext";
import SearchContextProvider from "./SearchContext";

const ContextProvider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <SearchContextProvider>{children}</SearchContextProvider>
    </ThemeContextProvider>
  );
};

export default ContextProvider;
