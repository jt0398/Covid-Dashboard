const db = require("../models");
var Sequelize = require("sequelize");

module.exports = {
  getActiveCount: function (req, res) {
    db.National_Daily_Trend.findAll({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
};
