const db = require("../models");

module.exports = {
  getActiveCount: (req, res) => {
    db.National_History.findAll({})
      .then((dbModel) => {
        console.log(dbModel.length);
        res.json({ data: dbModel, length: dbModel.length, status: 200 });
      })
      .catch((err) => res.status(22).json(err));
  },
};
