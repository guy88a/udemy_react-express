/* ======================================= ABOUT ======================================= */

/**
 * All configuration keys for production - DO commit this
 *
 * -googleClientID
 * -googleClientSecret
 *
 * -mongoURI
 *
 * -cookieKey
 */

/* ======================================= KEYS ======================================== */

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};
