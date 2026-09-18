import { useState } from "react";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskName) {
    if (taskName.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <main>
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
