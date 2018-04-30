/* ====================================== IMPORTS ====================================== */

// * Imports * //
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

/* ================================== CONFIGURATIONS =================================== */

// * Configurations * //
mongoose.connect(keys.mongoURI);
const app = express();
const PORT = process.env.PORT || 5000;

/* =============================== ROUTING & MIDDLEWARE ================================ */

// * Routing * //
require('./routes/authRoutes')(app);

/* ======================================= MAIN ======================================== */

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
