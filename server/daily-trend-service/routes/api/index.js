const router = require("express").Router();
const controller = require("../../controllers");

router.route("/count").get(controller.getActiveCount);

module.exports = router;
