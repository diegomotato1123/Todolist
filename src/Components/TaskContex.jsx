//permite administrar el estado de las tareas y compartirlo entre componentes.
// prevtasks : ACTUALIZAR EL ESTADO ANTERIOR SIN PERDER EL CONTENIDO
import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();
// CREATE PROVEDOR
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
// AGG TAREA
  const addTask = (taskInput, setTaskInput) => {
    if (!taskInput.title.trim() || !taskInput.description.trim()) {
      alert("Both title and description are required!");
      return;
    }
    const newTask = { id: Date.now(), title: taskInput.title, description: taskInput.description, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskInput({ title: "", description: "" });
  };
//DELETE TAREA
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
// MARCA TAREA COMPLETADA
  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  };
// PROOVEDER DATOS Y FUNCIONES A LOS COMPONENTES HIJOS
  return (
    <TaskContext.Provider value={{ tasks, filter, setFilter, addTask, deleteTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};
// ACCESO AL CONTEXTO
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};