import { useEffect, useCallback, useRef } from "react";
import { fetchManga } from "../services/apiService";

export const useSearch = (state, dispatch) => {
  const fetchMangaData = useCallback(async () => {
    dispatch({ type: "LOADING" });

    const params = Object.fromEntries(
      Object.entries({
        page: state.page,
        limit: state.limit,
        q: state.q,
        type: state.type,
        score: state.score,
        status: state.status,
        genre: state.genre,
        order_by: state.order_by,
        sort: state.sort,
        start_date: state.start_date,
        end_date: state.end_date,
      }).filter(([_, value]) => value !== undefined && value !== "")
    );

    if (params.q === undefined) return;

    try {
      const results = await fetchManga(params);
      dispatch({ type: "SET_RESULTS", payload: results.data });
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  }, [
    state.page,
    state.limit,
    state.q,
    state.type,
    state.score,
    state.status,
    state.genre,
    state.order_by,
    state.sort,
    state.start_date,
    state.end_date,
  ]);

  // fetch on search
  useEffect(() => {
    if (state.q !== undefined && state.q.length > 2) {
      const debounceTimer = setTimeout(() => {
        fetchMangaData();
      }, 500);

      return () => clearTimeout(debounceTimer);
    }
  }, [state.q]);

  // fetch on filter
  useEffect(() => {
    const hasFilters =
      state.type ||
      state.score ||
      state.status ||
      state.genre ||
      state.order_by ||
      state.sort ||
      state.start_date ||
      state.end_date;

    if (hasFilters) {
      const debounceTimer = setTimeout(() => {
        fetchMangaData();
      }, 500);

      return () => clearTimeout(debounceTimer);
    }
  }, [
    state.type,
    state.score,
    state.status,
    state.genre,
    state.order_by,
    state.sort,
    state.start_date,
    state.end_date,
  ]);

  useEffect(() => {
    if (state.page > 1) {
      fetchMangaData();
    }
  }, [state.page]);
};
