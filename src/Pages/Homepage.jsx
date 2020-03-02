import React from "react";
import Card from "../Components/Cards/Card";
import CardContainer from "../Components/Cards/CardContainer";
import useFetch from "../Components/Fetcher/FetcherComponent";

function Homepage() {
  const res = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
    {}
  );
  if (!res.response) {
    return <div>Loading...</div>;
  } else {
    const cocktail = res.response.drinks;

    return <CardContainer cardList={cocktail} />;
  }
}

export default Homepage;
