const request = require("supertest");
const app = require("../app");

describe("CI/CD Application Tests", () => {

  test("Home route should return 200", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Welcome to my CI/CD application!"
    );
  });

  test("Health route should return status ok", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: "ok"
    });
  });

  test("Unknown route should return 404", async () => {
    const response = await request(app).get("/unknown");

    expect(response.statusCode).toBe(404);
  });

});