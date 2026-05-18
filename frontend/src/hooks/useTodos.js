import { useState, useEffect } from 'react'
import * as todoService from '../services/todo.service'

const useTodos = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const addTodo = async (data) => {
    try {
      const newTodo = await todoService.createTodo(data)
      setTodos([...todos, newTodo])
    } catch (err) {
      setError(err.message)
    }
  }

  const toggleTodo = async (id, completed) => {
    try {
      const updated = await todoService.updateTodo(id, { completed: !completed })
      setTodos(todos.map(todo => todo._id === id ? updated : todo))
    } catch (err) {
      setError(err.message)
    }
  }

  const removeTodo = async (id) => {
    try {
      await todoService.deleteTodo(id)
      setTodos(todos.filter(todo => todo._id !== id))
    } catch (err) {
      setError(err.message)
    }
  }

useEffect(() => {
  const loadTodos = async () => {
    setLoading(true)
    try {
      const data = await todoService.getAllTodos()
      setTodos(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  loadTodos()
}, [])

  return { todos, loading, error, addTodo, toggleTodo, removeTodo }
}

export default useTodos