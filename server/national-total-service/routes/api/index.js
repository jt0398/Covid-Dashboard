const router = require("express").Router();
const controller = require("../../controllers");

router.route("/allcount").get(controller.getAllCount);

module.exports = router;
