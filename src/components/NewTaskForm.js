import React, {useState} from "react";
import {CATEGORIES as categories} from "../data"


function NewTaskForm({onTaskFormSubmit}) {
  const [itemName, handleNameChange] = useState("")
  const [itemCategory, handleCategoryChange] = useState("No Category?")

  function handleName(event){
    const handledName = event.target.value
    handleNameChange(handledName)
  }

  function handleCategory(event) {
    const handledCategory = event.target.value
    handleCategoryChange(handledCategory)
  }


  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      text: itemName,
      category: itemCategory
    }
    onTaskFormSubmit(formData);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={itemName} onChange={handleName} />
      </label>
      <label>
        Category
        <select name="category" value={itemCategory} onChange={handleCategory}>
          {categories.map((category, i) => {
            return <option key={i} value={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
