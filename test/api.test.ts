import request from "supertest";
import app from "../src/app";

afterAll(() => {
  app.close();
});

describe("GET /todo", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/todo")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          message: "todo",
        },
        done
      );
  });
});

describe('/images/', () => {
  test('should return the requested image', async () => {
    const response = await request(app)
      .get('/images/1.gif');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('image/gif');
  });
});