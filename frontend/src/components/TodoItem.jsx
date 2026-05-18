function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id, todo.completed)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <span> [{todo.priority}]</span>
      <button onClick={() => onDelete(todo._id)}>Eliminar</button>
    </div>
  )
}

export default TodoItem