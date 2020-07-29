const db = require("../models");

module.exports = {
  getAllCount: function (req, res) {
    db.National_Daily_Trend.findAll({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getActiveCount: function (req, res) {
    db.National_Daily_Trend.findAll({ attributes: [dateReported, active] })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getConfirmedCount: function (req, res) {
    db.National_Daily_Trend.findAll({ attributes: [dateReported, confirmed] })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getRecoveredCount: function (req, res) {
    db.National_Daily_Trend.findAll({ attributes: [dateReported, recovered] })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getDeceasedCount: function (req, res) {
    db.National_Daily_Trend.findAll({ attributes: [dateReported, deceased] })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getTestedCount: function (req, res) {
    db.National_Daily_Trend.findAll({ attributes: [dateReported, tested] })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
};
