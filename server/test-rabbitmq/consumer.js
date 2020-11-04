const amqp = require("amqplib");

connect();

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("NationalCurrent");

    channel.consume("National", (message) => {
      const input = JSON.parse(message.content.toString());
      console.log(`National - Received job with input ${input}`);
      channel.ack(message);
    });

    channel.consume("Cumulative", (message) => {
      const input = JSON.parse(message.content.toString());
      console.log(`Cumulative - Received job with input ${input}`);
      channel.ack(message);
    });

    channel.consume("Daily", (message) => {
      const input = JSON.parse(message.content.toString());
      console.log(`Cumulative - Received job with input ${input}`);
      channel.ack(message);
    });

    console.log("Waiting for messages...");
  } catch (ex) {
    console.error(ex);
  }
}

/*
const { ConnectionError } = require("sequelize");
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
            
            */
