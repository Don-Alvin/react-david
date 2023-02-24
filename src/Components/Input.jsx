/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ color, setColor, submitHandler }) => {
  return (
    <div className="color">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Enter Color</button>
      </form>
    </div>
  );
};

export default Input;
