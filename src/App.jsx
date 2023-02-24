import React, { useState } from "react";
import Display from "./Components/Display";
import Input from "./Components/Input";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setColor(color);
  };
  return (
    <div className="main">
      <Display submitHandler={submitHandler} color={color} />
      <Input color={color} setColor={setColor} />
    </div>
  );
};

export default App;
