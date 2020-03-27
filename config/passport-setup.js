const passport = require('passport')
const googleStrategy = require('passport-google-oauth').OAuth2Strategy
const keys = require('./keys')
const Customer = require('../db').customer


//Creating a coocky for user
passport.serializeUser((customer,done) => {
    done(null,customer.id)
})

passport.deserializeUser((id,done)=>{
    Customer.findOne({
        where:{
            id:id
        }
    }).then((foundCust) => {
        done(null,foundCust)
    })
})

passport.use(
    new googleStrategy({

        callbackURL: 'http://localhost:3333/home/login/google/redirect',
        clientID: keys.google.ClientID,
        clientSecret: keys.google.ClientSecret
        //option for the google strategy
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        // console.log(profile)

        Customer.findOne({
            where: {
                id: parseInt(profile.id)
            }
        }).then((customer) => {

            if (customer) {
                console.log('User already exist'+customer.firstName)
                done(null,customer)
            } else {
                Customer.create({
                    socialID: profile.id,
                    firstName: profile.name.givenName,
                    secondName: profile.name.familyName,
                    Email: profile.emails[0].value,
                    gender:profile.gender
                }).then((newuser) => {
                    done(null,newuser)
                    console.log('new user created' + newuser)
                })
            }
        })


    })
)