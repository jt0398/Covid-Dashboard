const app = require("./app.js");
const db = require("./models");
const worker = require("./utilities/worker");
var CronJob = require("cron").CronJob;

const PORT = process.env.PORT || 3003;

const job = new CronJob("0 */01 * * * *", function () {
  console.log("Every Minute:", new Date());
  worker.start();
});

var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;

db.sequelizeConnection.sync(syncOptions).then(function () {
  app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
  });
  job.start();
});
