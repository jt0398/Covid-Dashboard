const amqp = require("amqplib");
const db = require("../models");
const Sequelize = require("sequelize");
require("dotenv").config();

async function start() {
  try {
    const connection = await amqp.connect(process.env.AMQP_URL);

    if (!connection) return;

    const channel = await connection.createChannel();
    const result = await channel.assertQueue(process.env.CUMULATIVE_QUEUE);

    console.log("Start consume data in queue " + process.env.CUMULATIVE_QUEUE);

    channel.consume(process.env.CUMULATIVE_QUEUE, (message) => {
      const dataToInsert = JSON.parse(message.content);
      console.log(`National - Received job with input`);

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
          dbModel.length + " rows inserted/updated";
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
