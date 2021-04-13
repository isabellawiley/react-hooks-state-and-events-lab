import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [shoppingList, setCategory] = useState({
    selectedCategory: "All",
    items: items
  });

 function handleChange(event){
   if(event.target.value !== "All"){
    setCategory({
      selectedCategory: event.target.value,
      items: items.filter((item) => item.category === event.target.value)
    })
   }
   else{
     setCategory({
      selectedCategory: "All",
      items: items
     })
   }
   
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {shoppingList.items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;