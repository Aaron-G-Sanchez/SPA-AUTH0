require('dotenv').config('.env')
const cors = require('cors')
const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const { auth } = require('express-oauth2-jwt-bearer')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173'
  }
})

const { AUTH0_SECRET, AUTH0_AUDIENCE, AUTH0_BASE_URL, AUTH_SIGNING_ALGO } =
  process.env

const jwtCheck = auth({
  secret: AUTH0_SECRET,
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_BASE_URL,
  tokenSigningAlg: AUTH_SIGNING_ALGO
})

app.use(cors())
app.use(jwtCheck)

app.get('/users', (req, res) => {
  console.log(req.headers['x-custom-user-info'])

  res.json({
    msg: 'Backend was HIT!!'
  })
})

io.on('connection', (socket) => {
  console.log(socket.id)
  console.log('New connection created')
})

module.exports = {
  httpServer
}
