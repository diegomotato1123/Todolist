import React, { useState } from "react";
import "./Styles/CreateTaks.css";
import { useTasks } from "./TaskContex.jsx";
import TaskItem from "./TaskItem.jsx";
import TaskFilters from "./TaskFiilters.jsx";

export const CreateTask = () => {
  const { tasks, filter, addTask } = useTasks();
  const [taskInput, setTaskInput] = useState({ title: "", description: "" });

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <form onSubmit={(e) => { e.preventDefault(); addTask(taskInput, setTaskInput); }}>
        <input type="text" placeholder="Title" value={taskInput.title} onChange={(e) => setTaskInput({ ...taskInput, title: e.target.value })} />
        <textarea placeholder="Description" value={taskInput.description} onChange={(e) => setTaskInput({ ...taskInput, description: e.target.value })}></textarea>
        <button className="add-task" type="submit">Add Task</button>
      </form>
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <TaskFilters />
    </div>
  );
};

export default CreateTask;