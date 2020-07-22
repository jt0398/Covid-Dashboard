const express = require("express");
const app = express();
const db = require("./models");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;
db.sequelizeConnection.sync(syncOptions).then(function () {
  app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
  });
});

// app.listen(PORT, () => `Server running on port ${PORT} 🔥`);
