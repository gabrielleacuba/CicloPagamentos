const request = require("supertest");

const app = require("../config/server")

describe("Server running", () => {
    it("Verifica o servidor", async () => {
        const response = await request(app).get("/appCheck");
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({status: "online"});
    });
});