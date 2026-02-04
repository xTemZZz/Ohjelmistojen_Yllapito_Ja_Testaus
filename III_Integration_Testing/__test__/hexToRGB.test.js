const { expect } = require("chai");
const { hexToRGB } = require("../src/rgbConverter");

describe("hexToRGB function", () => {

    before(function() {
        console.log("\nStarting hexToRGB unit test\n")
    });

    after(function() {
        console.log("\nEnd of the hexToRGB unit test")
    })


    it("should convert hex (#ff00aa) to RGB", () => {
        const result = hexToRGB("#ff00aa");
        expect(result).to.deep.equal({ red: 255, green: 0, blue: 170 });
    });

    it("should convert hex (00ff00) to RGB", () => {
        const result = hexToRGB("00ff00");
        expect(result).to.deep.equal({ red: 0, green: 255, blue: 0 });
    });

    it("should throw an error for too short hex value", () => {
        expect(() => hexToRGB("#123")).to.throw("Invalid HEX value");
    });

    it("should throw an error for hex with invalid characters", () => {
        expect(() => hexToRGB("#GG0000")).to.throw("Invalid HEX value");
    });

});