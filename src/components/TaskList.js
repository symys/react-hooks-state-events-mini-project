import React, {useState} from "react";
import {TASKS as tasks} from "../data"
import Task from "./Task";

function TaskList() {
  const [allTasks, setList] = useState(tasks)
  
  function handleRemoving(id) {
    const newList = allTasks.filter((item) => allTasks.indexOf(item) !== id);

    setList(newList);
  }

  return (
    <div className="tasks">
       <ul className="Items">
        {allTasks.map((item, index) => (
          <Task key={index} text={item.text} category={item.category} id={index} onRemove={handleRemoving} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
