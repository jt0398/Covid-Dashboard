const db = require("../models");
const axios = require("axios").default;

module.exports = {
  pullData: function (req, res) {
    if (!req) {
      console.log("Called by CRON job");
    } else {
      console.log("Called via API route");
    }
    axios
      .get("http://covidtracking.com/api/us")
      .then(function (response) {
        let nationalCurrent = {};
        let nationalData = response.data[0];
        nationalCurrent.id = 1;
        nationalCurrent.confirmed = nationalData.positive;
        nationalCurrent.active = nationalData.positive - nationalData.recovered;
        nationalCurrent.recovered = nationalData.recovered;
        nationalCurrent.deceased = nationalData.death;
        nationalCurrent.tested = nationalData.tested;
        db.National_Current.upsert(nationalCurrent)
          .then((dbModel) => {
            if (!res) {
              console.log(dbModel ? "Inserted" : "Updated");
              return dbModel ? "Inserted" : "Updated";
            } else {
              dbModel
                ? res.status(200).json("Inserted")
                : res.status(200).json("Updated");
            }
          })
          .catch((err) => {
            console.log(err);
            if (!res) {
              return err;
            } else {
              res.status(400).json(err);
            }
          });
      })
      .catch(function (error) {
        console.error(error);
        res.send("Error");
      });
  },
};
