/* eslint-disable react/prop-types */
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, checkHandler, deleteHandler }) => {
  return (
    <div>
      <li className="item" key={item.id}>
        <div className="item-check">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => checkHandler(item.id)}
          />
          <p
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => checkHandler(item.id)}
          >
            {item.item}
          </p>
        </div>
        <FaTrashAlt role="button" onClick={() => deleteHandler(item.id)} />
      </li>
    </div>
  );
};

export default LineItem;
