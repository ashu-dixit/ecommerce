const express = require('express')
const path = require('path')
const port = process.env.PORT || 3333
const passportSetup = require('./config/passport-setup')
const cookieSession = require('cookie-session')
const keys = require('./config/keys')
const passport = require('passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieSession({
    maxAge: 6*60*60*1000,
    keys: [keys.session.key]
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/home', require('./routes').route)



app.listen(port, () => console.log('Server has started'))