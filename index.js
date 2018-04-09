/* ================================== CONFIGURATIONS =================================== */

// * Imports _______________________________________________________________ //
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./config/keys");

// * Configurations ________________________________________________________ //
const app = express();
const PORT = process.env.PORT || 5000;

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

/* =============================== ROUTING & MIDDLEWARE ================================ */

// * Routing _______________________________________________________________ //
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// * Middleware ____________________________________________________________ //

/* ======================================= MAIN ======================================== */

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
