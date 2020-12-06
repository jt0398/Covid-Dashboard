const amqp = require("amqplib");
const db = require("../models");
const Sequelize = require("sequelize");
require("dotenv").config();

async function start() {
  try {
    const connection = await amqp.connect(process.env.AMQP_URL);

    if (!connection) return;

    const channel = await connection.createChannel();
    const result = await channel.assertQueue(process.env.DAILY_QUEUE);

    console.log("Start consume data in queue " + process.env.DAILY_QUEUE);

    channel.consume(process.env.DAILY_QUEUE, (message) => {
      const dataToInsert = JSON.parse(message.content);
      console.log(`Daily - Received job with input`);

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
          return dbModel.length + " rows inserted/updated";
        })
        .catch((err) => {
          console.log(err);
        });

      channel.ack(message);
    });
  } catch (ex) {
    console.error(ex);
  }
}

module.exports = { start };
