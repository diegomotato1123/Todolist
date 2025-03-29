import React, { useState } from "react";
import "./CreateTaks.css";
import { addTask, deleteTask, toggleComplete } from "./Takslogic";

export const CreateTask = () => {
  const [taskInput, setTaskInput] = useState({
    title: "",
    description: "",
  });

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Filtrar las tareas según el estado del filtro
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") {
      return !task.completed;
    }
    if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  // Alternar el estado "completado" de una tarea al hacer clic en el contenedor
  const handleTaskClick = (taskId) => {
    toggleComplete(taskId, tasks, setTasks);
  };

  // Eliminar una tarea
  const handleDelete = (taskId) => {
    deleteTask(taskId, tasks, setTasks);
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>

      {/* Formulario para agregar tareas */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(taskInput, tasks, setTasks, setTaskInput);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={taskInput.title}
          onChange={(e) => setTaskInput({ ...taskInput, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={taskInput.description}
          onChange={(e) =>
            setTaskInput({ ...taskInput, description: e.target.value })
          }
        ></textarea>
        <button className="add-task" type="submit">
          Add Task
        </button>
      </form>

      {/* Mostrar las tareas filtradas */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <div
              onClick={() => handleTaskClick(task.id)}  // Cambiar el estado de completado al hacer clic
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <h3>{task.tittle}</h3>
              <p>{task.description}</p>

              {/* Botón de eliminar */}
              <button
                className="delete-btn"
                onClick={(e) => { e.stopPropagation(); handleDelete(task.id); }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Filtros para mostrar tareas pendientes, completadas o todas */}
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "pending" ? "active" : ""}`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          className={`filter-btn ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
