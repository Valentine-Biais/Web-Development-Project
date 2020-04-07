const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('*', (req, res) => {
    res.status(404).sendFile('../Web Developement/404.html')
})

app.listen(port, () => {
  console.log('Go to http://localhost:${port}!')
})
