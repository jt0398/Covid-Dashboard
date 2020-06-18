"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";
const env = "production";
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

//Extract the database information into an array
const databases = Object.keys(config.databases);

//Loop over the array and create a new Sequelize instance for every database from config.js
for (let i = 0; i < databases.length; ++i) {
  let database = databases[i];
  let dbPath = config.databases[database];

  //Store the database connection in our db object
  if (dbPath.use_env_variable) {
    db[database] = new Sequelize(process.env[dbPath.use_env_variable], dbPath);
  } else {
    db[database] = new Sequelize(
      dbPath.database,
      dbPath.username,
      dbPath.password,
      dbPath
    );
  }
}

fs.readdirSync(__dirname + "/cumulativeDB")
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = db.CumulativeDB.import(
      path.join(__dirname + "/cumulativeDB", file)
    );
    db[model.name] = model;
  });

fs.readdirSync(__dirname + "/dailyDB")
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = db.DailyDB.import(path.join(__dirname + "/dailyDB", file));
    db[model.name] = model;
  });

fs.readdirSync(__dirname + "/nationalDB")
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = db.NationalDB.import(
      path.join(__dirname + "/nationalDB", file)
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;

module.exports = db;
