import React from "react";
import {CATEGORIES as categories} from "../data"

function CategoryFilter({showCategoryTasks, selectedCategory}) {
  


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button key={index} type="button" value={category}
        className={category === selectedCategory?'selected':''} 
        onClick={() => {showCategoryTasks(index)}} index={index}>
          {category}
        </button>
      })}
    </div>
  );
}

export default CategoryFilter;
