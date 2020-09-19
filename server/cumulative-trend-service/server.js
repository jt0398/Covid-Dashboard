const db = require("./models");
const app = require("./app.js");

const PORT = process.env.PORT || 3001;

var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;
db.sequelizeConnection.sync(syncOptions).then(function () {
  app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`);
  });
});
