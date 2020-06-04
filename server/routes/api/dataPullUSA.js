const router = require("express").Router();
const dataPullUSAController = require("../../controllers/dataPullUSAController");

// Matches with "/api/projects"
router.route("/").get(dataPullUSAController.pullData);

module.exports = router;
