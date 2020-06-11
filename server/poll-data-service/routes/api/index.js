const router = require("express").Router();
const dataPullUSARoute = require("./dataPullUSA");

router.use("/polldata", dataPullUSARoute);

module.exports = router;
