/* ======================== IMPORTS & SETTINGS ========================= */
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

/* ======================= ROUTING & MIDDLEWARE ======================== */
// Routing _________________________
app.get("/", (req, res) => {
  sendResponse(res);
});

// Middleware ______________________
function sendResponse(resObject) {
  resObject.send({ hi: "there" });
}

/* =============================== MAIN ================================ */
app.listen(PORT, () => {
  console.log("Listening on port 5000");
});
