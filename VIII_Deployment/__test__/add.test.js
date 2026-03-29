import { expect } from "chai";
import add from "../src/add.js";
//
/**
 * Unit tests for add.js
 *
 * @module __test__/add.test.js
 */
describe("add.js", () => {
  /**
   * Tests for the add() function
   */
  describe("add()", () => {
    /**
     * It should correctly add two numbers.
     */
    it("should add two numbers correctly", () => {
      expect(add(2, 3)).to.equal(5);
    });
    /**
     * It should correctly count with negative numbers.
     */
    it("should add two negative numbers correctly", () => {
      expect(add(-2, -3)).to.equal(-5);
    });
    /**
     * It should work correctly with one paramter.
     */
    it("should add two negative numbers correctly", () => {
      expect(add(3)).to.equal(3);
    });
    /**
     * It should throw assertion error, if calculation is wrong
     */
    it("should throw assertion error", () => {
      expect(() => {
        expect(add(3, 3)).to.equal(5);
    }).to.throw();
    });
  });
});
