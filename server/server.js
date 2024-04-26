const { httpServer } = require('./src/app')
const port = 3001

httpServer.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`)
})
