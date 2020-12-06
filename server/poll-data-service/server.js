require("dotenv").config();
var CronJob = require("cron").CronJob;
const dataPullUSAController = require("./controllers/dataPullUSAController");

var express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(routes);

const job = new CronJob("0 */01 * * * *", function () {
  console.log("Every Minute:", new Date());
  dataPullUSAController.getCurrentSummary();
  dataPullUSAController.getDailySummary();
  dataPullUSAController.getDailyIncrease();
});

app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
  job.start();
});

module.exports = app;
