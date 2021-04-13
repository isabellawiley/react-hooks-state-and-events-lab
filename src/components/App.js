import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setMode] = useState(false);


  function handleClick(){
    setMode((isDarkMode) => !isDarkMode)
  }

  // this data will be passed down to the ShoppingList as a prop
  // console.log(items);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
