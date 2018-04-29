/* ================================== CONFIGURATIONS =================================== */

// * Imports * //
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require('./services/passport');

// * Configurations * //
const app = express();
mongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 5000;

/* =============================== ROUTING & MIDDLEWARE ================================ */

// * Routing * //
require('./routes/authRoutes')(app);

// * Middleware * //

/* ======================================= MAIN ======================================== */

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
