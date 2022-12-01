import React from "react";
import {CATEGORIES as categories} from "../data"

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button key={index} type="button">{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
