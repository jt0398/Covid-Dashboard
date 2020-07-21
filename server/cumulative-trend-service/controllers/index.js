const db = require("../models");
var sequelize = require("sequelize");

module.exports = {
  getActiveCount: (req, res) => {
    // res.status(200).json({ inside: "cumulative controller" });
    db.National_History.findAll({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(22).json(err));
  },
};
