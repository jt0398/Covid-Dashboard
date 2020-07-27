const request = require("supertest");
const app = require("../app");

test("Should see if the getActiveCount of cumulative response is not empty", async () => {
  const response = await request(app)
    .get("/api/cumulative/activecount")
    .send()
    .expect(200);
  expect(response.body.length).not.toEqual(0);
});
