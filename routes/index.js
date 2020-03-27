const route = require('express').Router()

route.use('/', require('./home').route)
route.use('/login', require('./auth').route)

exports = module.exports = { route }