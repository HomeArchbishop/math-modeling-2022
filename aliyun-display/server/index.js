const express = require('express')

const { resolve } = require('path')

const app = express()

app.use('/', express.static(resolve(__dirname, '../public')))

app.listen(4342, e => console.log('4342'))

