import React from "react";
import { useTasks } from "./TaskContex.jsx";

const TaskItem = ({ task }) => {
  const { toggleComplete, deleteTask } = useTasks();

  return (
    <li>
      <div onClick={() => toggleComplete(task.id)} className={`task-item ${task.completed ? "completed" : ""}`}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button className="delete-btn" onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
