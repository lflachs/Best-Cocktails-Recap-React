import React, { useState, useEffect } from "react";
import useFetcher from "./FetcherComponent";

const Fetcher = ({ children }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("vodka");

  useEffect(() => {
    setLoading(true);
    fetchData(query).then(data => {
      setLoading(false);
      setData(data);
    });
  }, [query]);
  const fetchData = query => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    ).then(resp => resp.json());
  };
  console.log(children);
  console.log(data);
  if (loading) return <h1>Loading...</h1>;
  if (!data) return null;
  return children(data, setQuery);
};
export default Fetcher;
