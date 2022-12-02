import React, {useState} from "react";
import {CATEGORIES as categories} from "../data"

function CategoryFilter({showCategoryTasks}) {
  const [selected, setSelected] = useState(null)


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button key={index} type="button" value={category}
        className={selected !== index ? "" : "selected"} 
        onClick={(event) => { setSelected(index); showCategoryTasks(event);}} index={index}>
          {category}
        </button>
      })}
    </div>
  );
}

export default CategoryFilter;
