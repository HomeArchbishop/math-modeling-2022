const express = require('express')
const app = express()

const { resolve } = require('path')

app.use('/', express.static(resolve(__dirname, '../')))

app.listen(3000, () => {
  console.log('start at 3000')
})