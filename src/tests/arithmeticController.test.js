const supertest = require("supertest");

const server = require("../../index");

describe("Arithmetic service tests", () => {

    afterEach(() => {
        server.close();
    });

    it("it should return an error due to incorrect payload", async () => {
        await supertest(server)
            .post("/calculate")
            .send({error:"3+3"})
            .expect(400)
            .then(async (response) => {
                expect(response.text).toBe("No request body calculation value present")
            });
    });

    it("it should return 6 by adding 3 and 3", async () => {
        await supertest(server)
            .post("/calculate")
            .send({calculation:"3+3"})
            .expect(200)
            .then(async (response) => {
                expect(response.text).toBe("6")
            });
    });
})
