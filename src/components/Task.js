import React from "react";
//import {TASKS as tasks} from "../data"

function Task({id, text, category, onRemove}) {

  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onRemove(id)}>X</button>
    </div>
  );
}

export default Task;
