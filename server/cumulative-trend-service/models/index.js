"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

var sequelizeConnection;

//Store the database connection in our db object
if (config.use_env_variable) {
  sequelizeConnection = new Sequelize(
    process.env[config.use_env_variable],
    config
  );
} else {
  sequelizeConnection = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function (file) {
    var model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelizeConnection = sequelizeConnection;
db.Sequelize = Sequelize;

module.exports = db;
