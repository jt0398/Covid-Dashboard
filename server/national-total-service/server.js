const express = require("express");
const app = express();

app.get("/api/national", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello world from a National Trend Service!" });
});

app.listen(3003, () => {
  console.log("Server is up on 3003");
});
