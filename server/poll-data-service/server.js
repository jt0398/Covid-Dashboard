require("dotenv").config();
var CronJob = require("cron").CronJob;
const dataPullUSAController = require("./controllers/dataPullUSAController");

var express = require("express");
var db = require("./models");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "From polldata service" });
});

// Routes
app.use(routes);

const job = new CronJob("0 */01 * * * *", function () {
  console.log("Every Minute:", new Date());
  dataPullUSAController.getCurrentSummary();
  dataPullUSAController.getDailySummary();
  dataPullUSAController.getDailyIncrease();
});

var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;

// Starting the server, syncing our models ------------------------------------/
//db.sequelizeConnection.sync(syncOptions).then(function () {});

var syncDBPromises = [];

Object.keys(db).forEach((modelName) => {
  if (modelName.indexOf("DB") > 0) {
    syncDBPromises.push(db[modelName].sync(syncOptions));
  }
});

Promise.all(syncDBPromises).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
    job.start();
  });
});

module.exports = app;
