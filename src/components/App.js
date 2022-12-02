import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TASKS as tasks } from "../data";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const initialTasks = [...tasks]
  const [dataFromSibling, setData] = useState("All")
  const [newItemsFromSibling, addItem] = useState(initialTasks)

  const handleCategoryFilter = (e) => {
    setData(e.target.value)
  }

  const waitNewItem = (value) => {
    addItem((oldArr) => [...oldArr, value])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter showCategoryTasks={handleCategoryFilter}/>
      <NewTaskForm onItemFormSubmit={waitNewItem}/>
      <TaskList selectedCategory={dataFromSibling} passNewItem={newItemsFromSibling} oldArr={newItemsFromSibling}/>
    </div>
  );
}

export default App;
