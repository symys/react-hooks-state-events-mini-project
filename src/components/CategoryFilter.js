import React, {useState} from "react";
import {CATEGORIES as categories} from "../data"

function CategoryFilter() {
  const [selected, setSelected] = useState(null)


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button key={index} type="button" 
        className={selected !== index ? "" : "selected"} 
        onClick={() => setSelected(index)} index={index}>
          {category}
        </button>
      })}
    </div>
  );
}

export default CategoryFilter;
