import { useCallback, useEffect, useState } from "react";
import { fetchData } from "./utils";

const useFetch = (url, initialState) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = useCallback(async (url) => {
    setIsLoading(true);
    try {
      const result = await fetchData(url);
      setData(result);
      setError(null);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setData(null);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (url) getData(url);
  }, [url, getData]);

  if (!url) {
    // Fix for not make requests with invalid url
    // returns the default state
    return [false, initialState, ""];
  }
  return [isLoading, data || initialState, error];
};

export { useFetch };
