const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.json({
    hey: 'NodeJs'
  })
})

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`)
})
