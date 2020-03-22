const express = require('express')
const path = require('path')
const port = process.env.PORT || 3333

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/home', require('./routes').route)



app.listen(port, () => console.log('Server has started'))