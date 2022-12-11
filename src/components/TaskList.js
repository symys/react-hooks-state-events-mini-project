import React from "react";

import Task from "./Task";


function TaskList({allTasks, handleRemoving}) {  

  // function handleRemoving(id) {
  //   const newList = allTasks.filter((item) => allTasks.indexOf(item) !== id);

  //   deleteTask(newList)
  // }

  return (
    <div className="tasks">
      <ul className="Items">
        {allTasks.map((item, index) => {
            return (
              <Task
                key={index}
                text={item.text}
                category={item.category}
                id={index}
                onRemove={() => handleRemoving(index)}
              />
            );
        })}
      </ul>
    </div>
  );
}

export default TaskList;
