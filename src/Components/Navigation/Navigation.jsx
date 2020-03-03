import React from "react";
import "./Navigation.scss";
import useFetch from "../Fetcher/FetcherComponent";
// import SearchBar from "../SearchBar/SearchBar";

function Navigation({ logo }) {
  // const res = useFetch(
  //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sprite",
  //   {}
  // );
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      {/* <SearchBar /> */}
      {/* <FilterBar /> */}
    </div>
  );
}
export default Navigation;
