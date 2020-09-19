const db = require("../models");
const axios = require("axios").default;

module.exports = {
  getCurrentSummary: function (req, res) {
    if (!req) {
      console.log("Getting Current Summary via CRON job");
    } else {
      console.log("Getting Current Summary via API route");
    }
    axios
      .get("https://api.covidtracking.com/v1/us/current.json")
      .then(function (response) {
        let nationalCurrent = {};
        let nationalData = response.data[0];
        nationalCurrent.id = 1;
        nationalCurrent.confirmed = nationalData.positive;
        nationalCurrent.active = nationalData.positive - nationalData.recovered;
        nationalCurrent.recovered = nationalData.recovered;
        nationalCurrent.deceased = nationalData.death;
        nationalCurrent.tested = nationalData.totalTestResults;
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
  getDailySummary: function (req, res) {
    if (!req) {
      console.log("Getting Daily Summary via CRON job");
    } else {
      console.log("Getting Daily Summary via API route");
    }
    axios
      .get("https://api.covidtracking.com/v1/us/daily.json")
      .then(function (response) {
        let dataToInsert = [];
        response.data.map((nationalData) => {
          // console.log(nationalData1)
          let nationalDailyData = {};
          nationalDailyData.dateReported = nationalData.dateChecked;
          nationalDailyData.confirmed = nationalData.positive
            ? nationalData.positive
            : 0;
          nationalDailyData.active =
            nationalData.positive - nationalData.recovered
              ? nationalData.positive - nationalData.recovered
              : 0;
          nationalDailyData.recovered = nationalData.recovered
            ? nationalData.recovered
            : 0;
          nationalDailyData.deceased = nationalData.death
            ? nationalData.death
            : 0;
          nationalDailyData.tested = nationalData.totalTestResults
            ? nationalData.totalTestResults
            : 0;
          dataToInsert.push(nationalDailyData);
        });
        db.National_History.bulkCreate(dataToInsert, {
          updateOnDuplicate: [
            "confirmed",
            "active",
            "positive",
            "recovered",
            "deceased",
            "tested",
            "updatedAt",
          ],
        })
          .then((dbModel) => {
            if (!res) {
              return dbModel.length + " rows inserted/updated";
            } else {
              res.status(200).json(dbModel.length + " rows inserted/updated");
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
  getDailyIncrease: function (req, res) {
    if (!req) {
      console.log("Getting Daily Increase via CRON job");
    } else {
      console.log("Getting Daily Increase via API route");
    }
    axios
      .get("https://api.covidtracking.com/v1/us/daily.json")
      .then(function (response) {
        let dataToInsert = [];
        // response.data.map((nationalData) => {
        for (i = 0; i < response.data.length - 1; i++) {
          let nationalDailyData = {};
          nationalData = response.data[i];
          nationalDataPrev = response.data[i + 1]; //The result set is in descending order, hence adding 1 to index to get previous day
          nationalDailyData.dateReported = nationalData.dateChecked;
          nationalDailyData.confirmed = nationalData.positiveIncrease
            ? nationalData.positiveIncrease
            : 0;
          nationalDailyData.active =
            nationalData.positive -
            nationalData.recovered -
            (nationalDataPrev.positive - nationalDataPrev.recovered)
              ? nationalData.positive -
                nationalData.recovered -
                (nationalDataPrev.positive - nationalDataPrev.recovered)
              : 0;
          nationalDailyData.recovered =
            nationalData.recovered - nationalDataPrev.recovered
              ? nationalData.recovered - nationalDataPrev.recovered
              : 0;
          nationalDailyData.deceased = nationalData.deathIncrease
            ? nationalData.deathIncrease
            : 0;
          nationalDailyData.tested = nationalData.totalTestResultsIncrease
            ? nationalData.totalTestResultsIncrease
            : 0;
          dataToInsert.push(nationalDailyData);
        }

        // });
        db.National_Daily_Trend.bulkCreate(dataToInsert, {
          updateOnDuplicate: [
            "confirmed",
            "active",
            "positive",
            "recovered",
            "deceased",
            "tested",
            "updatedAt",
          ],
        })
          .then((dbModel) => {
            if (!res) {
              return dbModel.length + " rows inserted/updated";
            } else {
              res.status(200).json(dbModel.length + " rows inserted/updated");
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
