const supertest = require("supertest");

const server = require("../../index");

const doesErrorMessageExist = (errors, message) => {
    return errors.filter(error => error.msg === message).length > 0;
}

describe.only("Arithmetic service tests", () => {

    afterEach(() => {
        server.close();
    });

    it("it should return an error due to incorrect payload", async () => {
        await supertest(server)
            .post("/add")
            .send({})
            .expect(400)
            .then(async (response) => {
                const body = JSON.parse(response.text);

                expect(doesErrorMessageExist(body.errors, "y does not exist")).toBe(true);
                expect(doesErrorMessageExist(body.errors, "x does not exist")).toBe(true);
            });
    });

    it("it should return 6 by adding 3 and 3", async () => {
        await supertest(server)
            .post("/add")
            .send({x: 3, y: 3})
            .expect(200)
            .then(async (response) => {
                const body = JSON.parse(response.text);
                expect(body.solution).toBe( 6)
            });
    });
})
