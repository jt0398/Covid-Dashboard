const request = require("supertest");
const app = require("../app");

test("Should see if the Count of daily response is not empty", async () => {
  const response = await request(app)
    .get("/api/daily/count")
    .send()
    .expect(200);
  expect(response.body.length).not.toEqual(0);
});
