const app = require("./app.js");
const db = require("./models");
const worker = require("./utilities/worker");

const PORT = process.env.PORT || 3003;

var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;

db.sequelizeConnection.sync(syncOptions).then(function () {
  worker.start();
  app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
  });
});
