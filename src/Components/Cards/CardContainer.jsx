import React from "react";
import Card from "./Card";

function CardContainer({ cardList }) {
  return (
    <React.Fragment>
      {cardList.map(card => (
        <Card id={card.name} cardTitle={card.title} cardImage={card.image} />
      ))}
    </React.Fragment>
  );
}

export default CardContainer;
