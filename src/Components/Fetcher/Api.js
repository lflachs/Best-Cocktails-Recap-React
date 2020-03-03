const fetchDrinks = async () => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka`
  );
  const jsonData = response.json();
  if (!response.ok) {
    throw new Error(jsonData, response.statusCode);
    // this is a custom exception class that stores JSON data
  }
  console.log("jsonData", jsonData);
  return jsonData;
};
export default fetchDrinks;
