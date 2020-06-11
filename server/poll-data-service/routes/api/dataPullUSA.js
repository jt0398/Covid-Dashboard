const router = require("express").Router();
const dataPullUSAController = require("../../controllers/dataPullUSAController");

// Matches with "/api/polldata"
router.route("/getCurrentSummary").get(dataPullUSAController.getCurrentSummary);
router.route("/getDailySummary").get(dataPullUSAController.getDailySummary);
router.route("/getDailyIncrease").get(dataPullUSAController.getDailyIncrease);

module.exports = router;
