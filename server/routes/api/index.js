const router = require("express").Router();
const dataPullUSARoute = require("./dataPullUSA");

router.use("/getUSData", dataPullUSARoute);  

module.exports = router;
