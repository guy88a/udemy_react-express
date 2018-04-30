/* ======================================= ABOUT ======================================= */

/**
 * Users collection schema
 *
 * properties:
 * -googleId: String
 */

/* ====================================== IMPORTS ====================================== */

const mongoose = require('mongoose');
const {Schema} = mongoose;

/* ====================================== SCHEMA ======================================= */

const userSchema = new Schema({googleId: String});

mongoose.model('users', userSchema);
