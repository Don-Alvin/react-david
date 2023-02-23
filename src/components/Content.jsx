/* eslint-disable react/prop-types */
import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, checkHandler, deleteHandler }) => {
  return (
    <main className="main">
      {items.length ? (
        <ItemList
          items={items}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
        />
      ) : (
        <p>Shopping list is empty</p>
      )}
    </main>
  );
};

export default Content;
