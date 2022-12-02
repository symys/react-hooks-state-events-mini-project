import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [dataFromSibling, setData] = useState("All")
  const [newItemFromSibling, addItem] = useState({})

  const handleCategoryFilter = (e) => {
    setData(e.target.value)
  }

  const waitNewItem = (value) => {
    addItem(value)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter showCategoryTasks={handleCategoryFilter}/>
      <NewTaskForm onItemFormSubmit={waitNewItem}/>
      <TaskList selectedCategory={dataFromSibling} passNewItem={newItemFromSibling}/>
    </div>
  );
}

export default App;
