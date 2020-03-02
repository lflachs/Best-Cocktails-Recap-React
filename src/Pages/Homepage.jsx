import React from "react";
import Card from "../Components/Cards/Card";
import CardContainer from "../Components/Cards/CardContainer";

function Homepage() {
  return (
    <CardContainer
      cardList={[
        {
          id: 1,
          title: "Lassi",
          image:
            "https://www.thecocktaildb.com/images/media/drink/m1suzm1487603970.jpg",
          category: ["Yoghourt", "Water"]
        }
      ]}
    />
  );
}

export default Homepage;
