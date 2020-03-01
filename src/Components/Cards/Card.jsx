import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";

import PropertyBloc from "./PropertyBloc";

function Card({ cardTitle, cardImage }) {
  const styles = {
    card: {
      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%), url("${cardImage}")`
    }
  };
  return (
    <div className="card" style={styles.card}>
      <h1 className="card-title">{cardTitle}</h1>
      <PropertyBloc properties={["Yoghurt", "Water"]} />
    </div>
  );
}
Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired
};
export default Card;
