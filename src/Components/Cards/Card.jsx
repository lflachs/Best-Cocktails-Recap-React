import React from "react";
import "./Card.scss";

function Card({ cardTitle, cardImage }) {
  const styles = {
    card: {
      backgroundImage: `url("${cardImage}")`
    }
  };
  return (
    <div className="card" style={styles.card}>
      <h1 className="card-title">{cardTitle}</h1>
      {/* <PropertiesBloc /> */}
    </div>
  );
}
export default Card;
