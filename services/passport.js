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
    callbackURL: '/auth/google/callback',
    proxy: true
}, async(accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id});

    //handleGoogleSignin(profile.id, existingUser, done);

    if (existingUser) {
        return done(null, existingUser);
        // we already have a record with the given profileID
    }
    // we don´t have a user record with this ID, make a new record
    const user = await new User({googleId: profile.id}).save();
    done(null, user);
}));

/* ==================================== FUNCTIONS ====================================== */

async function handleGoogleSignin(id, existingUser, done) {
    if (existingUser) {
        //user already exists:
        console.log("user already exists");
        return done(null, existingUser);
    }
    //create a new user:
    const user = await new User({googleId: id}).save();
    done(null, user);
    console.log("new user created");
};
