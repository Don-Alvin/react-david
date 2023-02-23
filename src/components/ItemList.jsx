/* eslint-disable react/prop-types */
import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, checkHandler, deleteHandler }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <LineItem
            key={item.id}
            item={item}
            checkHandler={checkHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
