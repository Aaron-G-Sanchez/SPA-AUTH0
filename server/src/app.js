require('dotenv').config('.env')
const cors = require('cors')
const express = require('express')
const app = express()

const { auth } = require('express-oauth2-jwt-bearer')

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
  res.json({
    msg: 'Backend was HIT!!'
  })
})

module.exports = {
  app
}
