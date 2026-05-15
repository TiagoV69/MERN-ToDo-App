const Todo = require('../models/Todo')

const getAllTodos = async () => {
  return await Todo.find()
}

const getTodoById = async (id) => {
  return await Todo.findById(id)
}

const createTodo = async (data) => {
  const todo = new Todo(data)
  return await todo.save()
}

const updateTodo = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true })
}

const deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id)
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
}