const axios = require("axios").default;
const amqp = require("amqplib");

async function addMessage(queueName, data) {
  const connection = await amqp.connect(process.env.AMQP_URL);

  if (!connection) return;

  const channel = await connection.createChannel();
  const queue = await channel.assertQueue(queueName);
  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));

  console.log("Data added to queue " + queueName);
}

module.exports = {
  getCurrentSummary: function (req, res) {
    if (!req) {
      console.log("Getting Current Summary via CRON job");
    } else {
      console.log("Getting Current Summary via API route");
    }
    axios
      .get("https://api.covidtracking.com/v1/us/current.json")
      .then(async function (response) {
        let nationalCurrent = {};
        let nationalData = response.data[0];
        nationalCurrent.id = 1;
        nationalCurrent.confirmed = nationalData.positive;
        nationalCurrent.active = nationalData.positive - nationalData.recovered;
        nationalCurrent.recovered = nationalData.recovered;
        nationalCurrent.deceased = nationalData.death;
        nationalCurrent.tested = nationalData.totalTestResults;

        addMessage(process.env.NATIONAL_QUEUE, nationalCurrent);

        console.log("National stats added to the queue");

        if (res) res.status(200).json(nationalData);
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
      .then(async function (response) {
        let dataToInsert = [];
        response.data.map((nationalData) => {
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

        addMessage(process.env.CUMULATIVE_QUEUE, dataToInsert);

        console.log("Cumulative stats added to the queue");

        if (res) res.status(200).json(dataToInsert);
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
      .then(async function (response) {
        let dataToInsert = [];

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

        addMessage(process.env.DAILY_QUEUE, dataToInsert);

        console.log("Daily stats added to the queue");

        if (res) res.status(200).json(dataToInsert);
      })
      .catch(function (error) {
        console.error(error);
        res.send("Error");
      });
  },
};
