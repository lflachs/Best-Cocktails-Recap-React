import React from "react";
import Card from "./Card";

function CardContainer({ cardList }) {
  return (
    <div className="card-container">
      {cardList.map(card => (
        <Card
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
