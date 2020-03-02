import React, { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log("received", data);
          setResponse(data);
        });
    };

    fetchData();
  }, []);
  return { response, error };
};
export default useFetch;

// function FetcherComponent(props) {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchDrink = () => {
//       fetch(
//         "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
//       )
//         .then(response => response.json())
//         .then(data => {
//           console.log("received", data);
//           setData(data);
//         });
//     };
//     fetchDrink();
//   }, []);
//   return props.render;
// }

// export default FetcherComponent;
