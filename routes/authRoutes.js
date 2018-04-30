/* ======================================= ABOUT ======================================= */

/**
 * Routing configurations
 */

/* ====================================== IMPORTS ====================================== */

const passport = require('passport');

/* ====================================== ROUTING ====================================== */

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));
}