const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/server");

describe("hexToRGB API", () => {

    before(function() {
        console.log("\nStarting server test\n")
    });

    after(function() {
        console.log("\nEnd of the server test")
    })
  
    it("should return RGB object for valid hex with #", async () => {
      const res = await request(app)
        .get("/hexToRGB")
        .query({ hex: "#ff00aa" })
        .expect(200);

      expect(res.body).to.deep.equal({ red: 255, green: 0, blue: 170 });
    });

    it("should return RGB object for valid hex without #", async () => {
      const res = await request(app)
        .get("/hexToRGB")
        .query({ hex: "00ff00" })
        .expect(200);

      expect(res.body).to.deep.equal({ red: 0, green: 255, blue: 0 });
    });

    it("should return 400 for invalid hex (#GG0000)", async () => {
      const res = await request(app)
        .get("/hexToRGB")
        .query({ hex: "#GG0000" })
        .expect(400);

      expect(res.body).to.have.property("error", "Invalid HEX value");
    });


});