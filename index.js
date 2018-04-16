/* ================================== CONFIGURATIONS =================================== */

// * Imports * //
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/keys");

// * Configurations * //
const app = express();
const PORT = process.env.PORT || 5000;

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, accessToken => {
  console.log(accessToken);
}));

/* =============================== ROUTING & MIDDLEWARE ================================ */

// * Routing * //
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

// * Middleware * //

/* ======================================= MAIN ======================================== */

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
