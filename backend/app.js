const express = require('express')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth')

const authMiddleware = require('./middlewares/auth')

const app = express()

mongoose.connect(process.env.MONGO_CONNECTION_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
})

app.use('/api/auth', authRoutes)

module.exports = app