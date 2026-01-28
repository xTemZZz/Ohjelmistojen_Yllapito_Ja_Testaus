const { expect } = require("chai");
const {add, sub, divide, multiply }  = require("../mylib.js");

describe("mylib.js functions \n", function () {

    before(function () {
        console.log("Starting test suite.")
    });

    after(function () {
        console.log("Finished test suite.")
    })
  describe("add()", function () {
    it("add should return correct sum", function () {
      expect(add(2,6)).to.equal(8);
    });
  });

  describe("#sub()", function () {
    it("sub should return correct difference", function () {
        expect(sub(7,3)).to.equal(4);
    })
  });

  describe("#multiply()", function (){
    it("multiply should return corrrect product", function() {
        expect(multiply(5,5)).to.equal(25);
    });
  })

  describe("#divide()", function () {
    it("divide should throw error on zero divisor", function () {
        expect(() => divide(10,0)).to.throw("Divisor 0 Error!");
    });
    it("divide should return corret quotient", function () {
        expect(divide(8,4)).to.equal(2);
    })
  })
});
