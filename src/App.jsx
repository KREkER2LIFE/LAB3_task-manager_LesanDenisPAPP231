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

  // Marcarea sarcinii ca finalizată/nefinalizată
  function toggleTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Ștergerea unei sarcini
  function deleteTask(taskId) {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    );
  }

  // Numărul sarcinilor finalizate
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <main>
      <h1>Task Manager</h1>

      {/* Formularul pentru adăugarea sarcinilor */}
      <TaskForm onAddTask={addTask} />

      {/* Statistici */}
      <div>
        <p>Total sarcini: {tasks.length}</p>
        <p>Finalizate: {completedTasks}</p>
      </div>

      {/* Lista sarcinilor */}
      {tasks.length === 0 ? (
        <p>Nu există sarcini momentan.</p>
      ) : (
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
      )}
    </main>
  );
}

export default App;
