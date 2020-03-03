import React from "react";
import Card from "./Card";

function CardContainer({ cardList, setQuery }) {
  console.log("cardList", typeof cardList);
  return (
    <div className="card-container">
      {cardList.map(card => (
        <Card
          setQuery={setQuery}
          key={card.idDrink}
          cardTitle={card.strDrink}
          cardImage={card.strDrinkThumb}
          category={[card.strIngredient1, card.strIngredient2]}
        />
      ))}
    </div>
  );
}

export default CardContainer;
