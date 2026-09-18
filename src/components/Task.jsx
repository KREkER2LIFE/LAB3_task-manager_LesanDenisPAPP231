function Task({ task, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span
        style={{
          textDecoration: task.completed
            ? "line-through"
            : "none",
        }}
      >
        {task.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
      >
        Șterge
      </button>
    </li>
  );
}

export default Task;
