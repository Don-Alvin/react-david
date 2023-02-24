/* eslint-disable react/prop-types */
import React from "react";

const Display = ({ color }) => {
  return (
    <div
      className="display"
      style={color ? { backgroundColor: color } : { backgroundColor: "#fff" }}
    >
      <p>{color ? color : "Default Color"}</p>
    </div>
  );
};

export default Display;
