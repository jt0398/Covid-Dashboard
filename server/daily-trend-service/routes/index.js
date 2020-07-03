const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit
router.use(function (req, res) {
  console.log("No Routes are hit", req.url, req.method);
  res.send("No Routes were hit");
});

module.exports = router;
