/* ================================== CONFIGURATIONS =================================== */

// * Imports * //
const express = require("express");
require('./services/passport');

// * Configurations * //
const app = express();
const PORT = process.env.PORT || 5000;

/* =============================== ROUTING & MIDDLEWARE ================================ */

// * Routing * //
require('./routes/authRoutes')(app);

// * Middleware * //

/* ======================================= MAIN ======================================== */

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
