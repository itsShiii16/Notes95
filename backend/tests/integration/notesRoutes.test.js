const request = require("supertest");
const app = require("../../src/app");
const { clearNotes } = require("../../src/notesStore");

describe("notes95 API integration tests", () => {
  beforeEach(() => {
    clearNotes();
  });

  test("POST /api/notes should create a sticky note and return status code 201", async () => {
    const response = await request(app)
      .post("/api/notes")
      .send({
        title: "Reminder",
        content: "Finish CMSC 129 Lab 4 integration tests.",
        color: "yellow"
      });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      id: 1,
      title: "Reminder",
      content: "Finish CMSC 129 Lab 4 integration tests.",
      color: "yellow",
      x: 0,
      y: 0
    });
  });

  test("GET /api/notes should return all saved sticky notes and status code 200", async () => {
    await request(app)
      .post("/api/notes")
      .send({
        title: "First Note",
        content: "This is the first sticky note.",
        color: "blue"
      });

    await request(app)
      .post("/api/notes")
      .send({
        title: "Second Note",
        content: "This is the second sticky note.",
        color: "green"
      });

    const response = await request(app).get("/api/notes");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0].title).toBe("First Note");
    expect(response.body[1].title).toBe("Second Note");
  });
});