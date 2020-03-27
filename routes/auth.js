const passport = require('passport')
const route = require('express').Router()

route.get('/logout',(req,res) => {
    req.logout()
    res.redirect('/')
})

route.get('/google', passport.authenticate('google',{
    scope:['profile','email']
}))

route.get('/google/redirect',passport.authenticate('google'),(req,res) => {

    // res.send('you reached a callback url')
    res.redirect('/')
})

exports = module.exports = {route}