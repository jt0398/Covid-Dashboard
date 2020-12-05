const amqp = require("amqplib");
const db = require("../models");
const Sequelize = require("sequelize");
require("dotenv").config();

async function start() {
  try {
    const connection = await amqp.connect(process.env.AMQP_URL);
    const channel = await connection.createChannel();
    const result = await channel.assertQueue(process.env.NATIONAL_QUEUE);

    channel.consume(process.env.NATIONAL_QUEUE, (message) => {
      const input = JSON.parse(message.content);
      console.log(`National - Received job with input ${input}`);
      channel.ack(message);
    });

    console.log("Waiting for messages...");
  } catch (ex) {
    console.error(ex);
  }
}

module.exports = { start };
