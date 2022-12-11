import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TASKS as tasks } from "../data";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const initialTasks = [...tasks]
  const [allTasks, setItems] = useState(initialTasks)
  const [selectedCategory, setSelectedCategory] = useState("All");

  

  function handleDeleteItem(deletedItem) {
    //console.log(deletedItem)
    const updatedItems = allTasks.filter((item, index) => index !== deletedItem);
    setItems(updatedItems);
  }


  function handleCategoryFilter (currentCategoryIndex) {
    let returnedCategory;
    for(let i = 0; i < CATEGORIES.length; i++){
      if(i !== currentCategoryIndex) continue
      else returnedCategory = CATEGORIES[i]
    }
    console.log(returnedCategory)
    const updatedItems = allTasks.map((task) => task.category === returnedCategory)
    setItems(updatedItems)
    setSelectedCategory(returnedCategory)
  }

  const waitNewItem = (value) => {
    setItems((allTasks) => [...allTasks, value])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter showCategoryTasks={handleCategoryFilter} selectedCategory={selectedCategory}/>
      <NewTaskForm onItemFormSubmit={waitNewItem}/>
      <TaskList allTasks={allTasks} handleRemoving={handleDeleteItem}/>
    </div>
  );
}

export default App;
