import React from "react";
import "./Card.scss";
import PropTypes from "prop-types";

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
Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired
};
export default Card;
