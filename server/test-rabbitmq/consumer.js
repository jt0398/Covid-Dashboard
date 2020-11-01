const amqp = require("amqplib");

connect();

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("NationalCurrent");

    channel.consume("NationalCurrent", (message) => {
      const input = JSON.parse(message.content.toString());
      console.log(`Received job with input ${input.date}`);
      channel.ack(message);
    });

    console.log("Waiting for messages...");
  } catch (ex) {
    console.error(ex);
  }
}
