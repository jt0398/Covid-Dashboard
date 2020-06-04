require("dotenv").config();
var CronJob = require('cron').CronJob;
const dataPullUSAController = require("./controllers/dataPullUSAController");

var express = require("express");
var db = require("./models");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)ß
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Routes
app.use(routes);
// const job = new CronJob('* * * * * *', function() {
const job = new CronJob('0 */01 * * * *', function() {
  console.log('Every Minute:', new Date());
  dataPullUSAController.pullData();
});

var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;

// Starting the server, syncing our models ------------------------------------/
db.sequelizeConnection.sync(syncOptions).then(function () {
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
