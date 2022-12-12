import React from "react";
import {CATEGORIES as categories} from "../data"

function CategoryFilter({setSelectedCategory, selectedCategory}) {
  


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button key={index} type="button" value={category}
        className={category === selectedCategory?'selected':''} 
        onClick={() => {setSelectedCategory(category)}} index={index}>
          {category}
        </button>
      })}
    </div>
  );
}

export default CategoryFilter;
