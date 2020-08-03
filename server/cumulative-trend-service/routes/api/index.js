const router = require("express").Router();
const controller = require("../../controllers");

router.route("/allcount").get(controller.getAllCount);

router.route("/activecount").get(controller.getActiveCount);

router.route("/confirmedcount").get(controller.getConfirmedCount);

router.route("/recoveredcount").get(controller.getRecoveredCount);

router.route("/deceasedcount").get(controller.getDeceasedCount);

router.route("/testedcount").get(controller.getTestedCount);

module.exports = router;
