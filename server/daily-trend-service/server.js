const express = require("express");
const app = express();

app.get("/api/daily", (req, res) => {
  res.status(200).json({ message: "Hello world from a Daily Trend Service!" });
});

app.listen(3002, () => {
  console.log("Server is up on 3002");
});
