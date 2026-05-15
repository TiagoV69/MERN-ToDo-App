const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const todoRoutes = require('./routes/todo.routes')

// cargar variables de entorno
dotenv.config()

// Conectar a la base de datos
connectDB()

// Crear app
const app = express()

// Middlewares globales
app.use(cors())
app.use(express.json())

//  Enrutamiento
app.use('/api/todos', todoRoutes)

// Ruta de prueba
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server running' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app