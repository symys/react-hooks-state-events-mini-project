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
  //const filteredTasks = (selectedCategory === "All") ? TASKS : TASKS.filter(t => t.category === selectedCategory)

  

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
    //console.log(returnedCategory)
    let updatedItems;
    if(returnedCategory === "All"){
      updatedItems = allTasks;
    }
    else{
      const holdAllTasks = allTasks;
      updatedItems = allTasks.filter((t) => t.category === returnedCategory)
      console.log(holdAllTasks)
    }

    //const updatedItems = (returnedCategory === "All") ? allTasks : allTasks.filter(t => t.category === returnedCategory)
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
      <NewTaskForm onTaskFormSubmit={waitNewItem}/>
      <TaskList allTasks={allTasks} handleRemoving={handleDeleteItem}/>
    </div>
  );
}

export default App;
