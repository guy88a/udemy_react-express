/* ======================================= ABOUT ======================================= */

/**
 * Users collection schema
 *
 * properties:
 * -googleId: String
 */

/* ====================================== SCHEMA ======================================= */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = ({googleId: String});

mongoose.model('users', UserSchema);
