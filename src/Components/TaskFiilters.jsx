import React from "react";
import { useTasks } from "./TaskContex.jsx";

const TaskFilters = () => {
  const { filter, setFilter } = useTasks();

  return (
    <div className="filter-buttons">
      <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
      <button className={`filter-btn ${filter === "pending" ? "active" : ""}`} onClick={() => setFilter("pending")}>Pending</button>
      <button className={`filter-btn ${filter === "completed" ? "active" : ""}`} onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default TaskFilters;