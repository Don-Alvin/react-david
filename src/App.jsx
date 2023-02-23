/* eslint-disable no-unused-vars */
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import AddItem from "./components/AddItem";
import { useState } from "react";
import SearchItem from "./components/SearchItem";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addedItem = { id, checked: false, item };
    const listItems = [...items, addedItem];
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const checkHandler = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const deleteHandler = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <Header title="Shopping List" />
      <main className="main-section">
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          submitHandler={submitHandler}
        />
        <SearchItem search={search} setSearch={setSearch} />
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          setItems={setItems}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
