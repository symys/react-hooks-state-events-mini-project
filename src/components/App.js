import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import {  TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [allTasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleDeleteItem(deletedItem) {
    //console.log(deletedItem)
    const updatedItems = allTasks.filter((item, index) => index !== deletedItem);
    setTasks(updatedItems);
  }

  const filteredTasks = selectedCategory === "All" ? allTasks : allTasks.filter((task) => task.category === selectedCategory)

  
  const waitNewItem = (value) => {
    setTasks((allTasks) => [...allTasks, value])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm onTaskFormSubmit={waitNewItem}/>
      <TaskList allTasks={filteredTasks} handleRemoving={handleDeleteItem}/>
    </div>
  );
}

export default App;
