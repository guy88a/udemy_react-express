/* ================================== CONFIGURATIONS =================================== */

// * Imports _______________________________________________________________ //
const express = require("express");

// * Configurations ________________________________________________________ //
const app = express();
const PORT = process.env.PORT || 5000;

/* =============================== ROUTING & MIDDLEWARE ================================ */

// * Routing _______________________________________________________________ //
app.get("/", (req, res) => {
  sendResponse(res);
});

// * Middleware ____________________________________________________________ //
function sendResponse(resObject) {
  resObject.send({ hi: "there" });
}

/* ======================================= MAIN ======================================== */

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
