const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Carga las variables de entorno desde .env
dotenv.config()

// Conecta a la base de datos
connectDB()

const app = express()

// Middlewares globales
app.use(cors())
app.use(express.json())

// Ruta de prueba
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server running' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app