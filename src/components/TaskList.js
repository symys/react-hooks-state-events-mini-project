import React, { useState } from "react";

import Task from "./Task";


function TaskList({ selectedCategory, passNewItem, oldArr }) {  
 
  const [allTasks, deleteTask] = useState(passNewItem);

  function handleRemoving(id) {
    const newList = allTasks.filter((item) => allTasks.indexOf(item) !== id);

    deleteTask(newList)
  }

  return (
    <div className="tasks">
      <ul className="Items">
        {allTasks.map((item, index) => {
          if (selectedCategory === "All") {
            return (
              <Task
                key={index}
                text={item.text}
                category={item.category}
                id={index}
                onRemove={handleRemoving}
              />
            );
          }
          else if( selectedCategory === item.category){
            return (
              <Task
                key={index}
                text={item.text}
                category={item.category}
                id={index}
                onRemove={handleRemoving}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default TaskList;
