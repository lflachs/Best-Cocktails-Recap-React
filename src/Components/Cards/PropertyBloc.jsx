import React from "react";
import PropTypes from "prop-types";

import "./PropertyBloc.scss";

import PropertyButton from "./PropertyButton";

function PropertyBloc({ properties }) {
  return (
    <React.Fragment>
      <h5 className="property-bloc-title">Main ingredients:</h5>
      <div className="property-bloc">
        {properties.map((property, idx) => (
          <PropertyButton key={idx} title={property} />
        ))}
      </div>
    </React.Fragment>
  );
}

PropertyBloc.propTypes = {
  properties: PropTypes.array.isRequired
};

export default PropertyBloc;
