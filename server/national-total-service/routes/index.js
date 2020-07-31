const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api/national", apiRoutes);

// If no API routes are hit
router.use(function (req, res) {
  res.status(200).send("No Routes were hit");
});

module.exports = router;
