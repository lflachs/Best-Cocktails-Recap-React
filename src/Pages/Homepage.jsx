import React, { useState } from "react";
import Card from "../Components/Cards/Card";
import CardContainer from "../Components/Cards/CardContainer";
import useFetch from "../Components/Fetcher/FetcherComponent";
import Fetcher from "../Components/Fetcher/Fetcher";
import api from "../Components/Fetcher/Api";

function Homepage() {
  return (
    <div>
      <Fetcher>
        {(data, setQuery) => {
          return <CardContainer cardList={data.drinks} setQuery={setQuery} />;
        }}
      </Fetcher>
    </div>
  );
}

export default Homepage;
