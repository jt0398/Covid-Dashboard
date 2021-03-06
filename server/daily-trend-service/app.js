const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

module.exports = app;
