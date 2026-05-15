const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo.controller')

router.get('/', todoController.getAll)
router.get('/:id', todoController.getById)
router.post('/', todoController.create)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.remove)

module.exports = router