import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    await onAdd({ title, priority: 'medium' })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default TodoForm