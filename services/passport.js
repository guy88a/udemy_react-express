/* ======================================= ABOUT ======================================= */

/**
 * Passport strategies setup
 *
 * -GoogleStrategy
 */

/* ====================================== IMPORTS ====================================== */

const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");
const mongoose = require('mongoose');

/* ================================== CONFIGURATIONS =================================== */

const User = mongoose.model('users');

// * Configurations * //
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    new User({googleId: profile.id}).save();
}));