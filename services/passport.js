/* ======================================= ABOUT ======================================= */

/**
 * Passport strategies setup
 *
 * -GoogleStrategy
 */

/* ====================================== IMPORTS ====================================== */

const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require('mongoose');
const keys = require("../config/keys");

/* ================================== CONFIGURATIONS =================================== */

const User = mongoose.model('users');

// * Configurations * //
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User
        .findById(id)
        .then(user => {
            done(null, user);
        });
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User
        .findOne({googleId: profile.id})
        .then(existingUser => {
            if (existingUser) {
                done(null, existingUser);
                // we already have a record with the given profileID
            } else {
                // we don´t have a user record with this ID, make a new record
                new User({googleId: profile.id})
                    .save()
                    .then(user => done(null, user));
            }
        })
        .catch(err => {
            console.log(err);
        });
}));

/* ==================================== FUNCTIONS ====================================== */

function handleSignin(user, done) {
    if (user) {
        //user already exists:
        done(null, existingUser);
        console.log("user already exists");
    } else {
        //create a new user:
        new User({googleId: profile.id})
            .save()
            .then((user) => {
                done(null, user);
                console.log("new user created");
            });
    }
}
