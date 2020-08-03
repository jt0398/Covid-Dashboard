const db = require("../models");
const moment = require("moment");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  getAllCount: function (req, res) {
    db.National_Current.findAll({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
};
