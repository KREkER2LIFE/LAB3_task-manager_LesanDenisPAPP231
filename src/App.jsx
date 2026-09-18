import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  // Adăugarea unei sarcini
  function addTask(taskName) {
    if (taskName.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskName.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  // Marchează sarcina ca finalizată / nefinalizată
  function toggleTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Șterge sarcina
  function deleteTask(taskId) {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    );
  }

  return (
    <main>
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;

