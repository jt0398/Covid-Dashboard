const db = require("../models");
const moment = require("moment");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  getAllCount: function (req, res) {
    db.National_Daily_Trend.findAll({
      order: [["dateReported"]],
      where: {
        dateReported: {
          [Op.gte]: moment().subtract(1, "months").toDate(),
        },
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getActiveCount: function (req, res) {
    db.National_Daily_Trend.findAll({
      attributes: ["dateReported", "active"],
      order: [["dateReported"]],
      where: {
        dateReported: {
          [Op.gte]: moment().subtract(1, "months").toDate(),
        },
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getConfirmedCount: function (req, res) {
    db.National_Daily_Trend.findAll({
      attributes: ["dateReported", "confirmed"],
      order: [["dateReported"]],
      where: {
        dateReported: {
          [Op.gte]: moment().subtract(1, "months").toDate(),
        },
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getRecoveredCount: function (req, res) {
    db.National_Daily_Trend.findAll({
      attributes: ["dateReported", "recovered"],
      order: [["dateReported"]],
      where: {
        dateReported: {
          [Op.gte]: moment().subtract(1, "months").toDate(),
        },
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getDeceasedCount: function (req, res) {
    db.National_Daily_Trend.findAll({
      attributes: ["dateReported", "deceased"],
      order: [["dateReported"]],
      where: {
        dateReported: {
          [Op.gte]: moment().subtract(1, "months").toDate(),
        },
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
  getTestedCount: function (req, res) {
    db.National_Daily_Trend.findAll({
      attributes: ["dateReported", "tested"],
      order: [["dateReported"]],
      where: {
        dateReported: {
          [Op.gte]: moment().subtract(1, "months").toDate(),
        },
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
};
