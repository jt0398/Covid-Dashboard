const request = require("supertest");
const axios = request("axois");
// const pullData = require("../controllers/dataPullUSAController");

test("Expect the data", async () => {
  await axios
    .get("http://localhost:3001/api/getUSData")
    .then((res) => expect(res.status).toBe("200"))
    .catch((err) => console.error(err));
  // axios.get("http://localhost:3001/api/getUSData").then((data) => {
  //   expect(data.status).toBe("200");
  // });
});
