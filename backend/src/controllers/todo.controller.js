const todoService = require('../services/todo.service')

const getAll = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos()
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
    const todo = await todoService.getTodoById(req.params.id)
    if (!todo) return res.status(404).json({ message: 'Todo no encontrado' })
    res.json(todo)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const create = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body)
    res.status(201).json(todo)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const update = async (req, res) => {
  try {
    const todo = await todoService.updateTodo(req.params.id, req.body)
    if (!todo) return res.status(404).json({ message: 'Todo no encontrado' })
    res.json(todo)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const remove = async (req, res) => {
  try {
    const todo = await todoService.deleteTodo(req.params.id)
    if (!todo) return res.status(404).json({ message: 'Todo no encontrado' })
    res.json({ message: 'Todo eliminado correctamente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getAll, getById, create, update, remove }