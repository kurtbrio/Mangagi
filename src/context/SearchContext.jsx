import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

const SearchContext = createContext();

// API
const baseUrl = "https://api.jikan.moe/v4/manga";

// actions
const LOADING = "LOADING";
const SET_RESULTS = "SET_RESULTS";

// initial state
const initialState = {
  loading: false,
  q: "",
  type: "manga",
  score: "",
  status: "",
  genre: "",
  order_by: "",
  sort: "desc",
  start_date: "",
  results: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
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
    case "SET_RESULTS":
      return { ...state, results: action.payload, loading: false };
    default:
      return state;
  }
};

const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchManga = useCallback(async () => {
    dispatch({ type: LOADING });

    const params = new URLSearchParams({
      q: state.q,
      type: state.type,
      score: state.score,
      status: state.status,
      genre: state.genre,
      order_by: state.order_by,
      sort: state.sort,
      start_date: state.start_date,
    });

    params.forEach((value, key) => {
      if (!value) params.delete(key);
    });

    try {
      const response = await fetch(`${baseUrl}?${params}`);
      if (!response.ok) throw new Error("Error fetching manga data");
      const data = await response.json();
      dispatch({ type: SET_RESULTS, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  }, [
    state.q,
    state.type,
    state.score,
    state.status,
    state.genre,
    state.order_by,
    state.sort,
    state.start_date,
  ]);

  // fetch search
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (state.q.length > 2) fetchManga();
    }, 1000);

    return () => clearTimeout(debounceTimer);
  }, [state.q, fetchManga]);

  // fetch sort
  useEffect(() => {
    const hasChanged =
      state.type !== initialState.type ||
      state.score !== initialState.score ||
      state.status !== initialState.status ||
      state.genre !== initialState.genre ||
      state.order_by !== initialState.order_by ||
      state.sort !== initialState.sort ||
      state.start_date !== initialState.start_date;

    if (hasChanged) {
      fetchManga();
    }
  }, [
    state.type,
    state.score,
    state.status,
    state.genre,
    state.order_by,
    state.sort,
    state.start_date,
    fetchManga,
  ]);

  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
