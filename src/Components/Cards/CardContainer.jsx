import React from "react";
import Card from "./Card";

function CardContainer({ cardList }) {
  return (
    <React.Fragment>
      {cardList.map(card => (
        <Card
          key={card.id}
          cardTitle={card.title}
          cardImage={card.image}
          category={card.category}
        />
      ))}
    </React.Fragment>
  );
}

export default CardContainer;
