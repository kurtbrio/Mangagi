import React, { createContext, useEffect, useReducer } from "react";

export const MangaContext = createContext();

// API
const baseUrl = "https://api.jikan.moe/v4";

// action
const GET_TOP_MANGA = "GET_TOP_MANGA";
const LOADING = "LOADING";
const GET_PICTURES = "GET_PICTURES";

// initial state
const initialState = {
  manga: [],
  loading: false,
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "GET_TOP_MANGA":
      return { ...state, manga: action.payload, loading: false };
    case "GET_PICTURES":
      return { ...state, manga: action.payload, loading: false };
    default:
      return state;
  }
};

const MangaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get top manga
  const getTopManga = async () => {
    dispatch({ type: LOADING });
    try {
      const response = await fetch(`${baseUrl}/top/manga`);
      if (!response.ok) throw new Error("Error fetching manga data");
      const data = await response.json();
      dispatch({ type: GET_TOP_MANGA, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  // initial render
  useEffect(() => {
    getTopManga();
  }, []);

  return (
    <MangaContext.Provider value={{ ...state, getTopManga }}>
      {children}
    </MangaContext.Provider>
  );
};

export default MangaContextProvider;
