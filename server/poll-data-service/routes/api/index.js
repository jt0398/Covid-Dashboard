const router = require("express").Router();
const dataPullUSARoute = require("./dataPullUSA");

router.use("/getUSAData", dataPullUSARoute);  

module.exports = router;
