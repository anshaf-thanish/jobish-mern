import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'

const app = express()
const PORT = process.env.PORT || 5000

// DB

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});