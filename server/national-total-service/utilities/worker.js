const amqp = require("amqplib");
const db = require("../models");
const Sequelize = require("sequelize");
require("dotenv").config();

async function start() {
  try {
    const connection = await amqp.connect(process.env.AMQP_URL);

    if (!connection) return;

    const channel = await connection.createChannel();
    const result = await channel.assertQueue(process.env.NATIONAL_QUEUE);

    console.log("Start consume data in queue " + process.env.NATIONAL_QUEUE);

    channel.consume(process.env.NATIONAL_QUEUE, (message) => {
      const nationalCurrent = JSON.parse(message.content);
      console.log(`National - Received job with input`);

      db.National_Current.upsert(nationalCurrent)
        .then((dbModel) => {
          console.log(dbModel ? "Inserted" : "Updated");
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
