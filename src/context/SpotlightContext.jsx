import React, { createContext, useReducer } from "react";
import { useSearch } from "../custom-hooks/useSearch";

export const SpotlightContext = createContext();

// initial state
const initialState = {
  loading: false,
  order_by: "popularity",
  results: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SET_RESULTS":
      return { ...state, results: action.payload, loading: false };
    default:
      return state;
  }
};

const SpotlightContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useSearch(state, dispatch);

  return (
    <SpotlightContext.Provider value={{ state, dispatch }}>
      {children}
    </SpotlightContext.Provider>
  );
};

export default SpotlightContextProvider;
