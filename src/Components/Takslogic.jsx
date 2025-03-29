// Función para agregar una tarea
export const addTask = (taskInput, tasks, setTasks, setTaskInput) => {
  if (!taskInput.title.trim() || !taskInput.description.trim()) {
    alert("Both title and description are required!");
    return;
  }

  const currentTask = {
    id: Date.now(),
    tittle: taskInput.title,
    description: taskInput.description,
    completed: false, // Inicialmente la tarea no está completada
  };

  setTasks([...tasks, currentTask]);
  setTaskInput({ title: "", description: "" });
};

// Función para eliminar una tarea
export const deleteTask = (taskId, tasks, setTasks) => {
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  setTasks(updatedTasks);
};

// Función para alternar el estado de completado de una tarea
export const toggleComplete = (taskId, tasks, setTasks) => {
  const updatedTasks = tasks.map(task =>
    task.id === taskId
      ? { ...task, completed: !task.completed }  // Alterna entre completado y pendiente
      : task
  );
  setTasks(updatedTasks);
};
