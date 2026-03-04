const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/main");

/**
 * Mocha + chai tests for main.js and routes.js module
 */
describe("Counter API", () => {

    before(function() {
        console.log("\nStarting server test\n")
    });

    after(function() {
        console.log("\nEnd of the server test")
    })
    /**
     * Tests that counter is inited to 0
     */
    it('should read initial counter', async () => {
        const res = await request(app).get('/counter-read');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ counter: 0 });
    });

    /**
     * Tests that server is OK
     * Tests that Value increased by one returns 1
     * Tests that Value increased by one more returns 0
     * Tests that reset returns value 0
     */
    it('should increase twice and then reset counter', async () => {
        let res = await request(app).get('/counter-increase');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ counter: 1});

        res = await request(app).get('/counter-increase');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ counter: 2 });

        res = await request(app).get('/counter-reset');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ counter: 0})
    });


});