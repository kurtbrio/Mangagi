import React, { createContext, useReducer } from "react";
import { useSearch } from "../custom-hooks/useSearch";

export const SearchContext = createContext();

// initial state
const initialState = {
  loading: false,
  page: 1,
  limit: 25,
  q: "",
  type: "manga",
  score: "",
  status: "",
  genre: "",
  order_by: "rank",
  sort: "asc",
  start_date: "",
  end_date: "",
  results: [],
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_QUERY":
      return { ...state, q: action.payload };
    case "SET_TYPE":
      return { ...state, type: action.payload };
    case "SET_SCORE":
      return { ...state, score: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "SET_GENRE":
      return { ...state, genre: action.payload };
    case "SET_ORDER_BY":
      return { ...state, order_by: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "SET_START_DATE":
      return { ...state, start_date: action.payload };
    case "SET_END_DATE":
      return { ...state, end_date: action.payload };
    case "SET_RESULTS":
      return { ...state, results: action.payload, loading: false };
    default:
      return state;
  }
};

const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useSearch(state, dispatch);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
