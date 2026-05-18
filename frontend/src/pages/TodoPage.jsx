import useTodos from '../hooks/useTodos'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'

function TodoPage() {
  const { todos, loading, error, addTodo, toggleTodo, removeTodo } = useTodos()

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Mi Todo App</h1>
      <TodoForm onAdd={addTodo} />
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={removeTodo}
        />
      ))}
    </div>
  )
}

export default TodoPage