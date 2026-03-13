const request = require("supertest");
const app = require("../src/app");

test("GET / returns hello message", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Hello from CI/CD pipeline!");
});