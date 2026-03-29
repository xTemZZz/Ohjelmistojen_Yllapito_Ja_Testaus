import { expect } from "chai";
import castArray from "../src/castArray.js"

describe("castArray.js", () => {
  /**
   * Tests for the castArray() function
   */
  describe("castArray()", () => {
    /**
     * Test castArray() using number as parameter.
     */
    it('should return array with one in it', () => {
        expect(castArray(1)).to.deep.equal([1]);
    });
    /**
     * Test castArray() using object.
     */
    it('should return array with one object in it', () => {
        expect(castArray({a: 1})).to.deep.equal([{a: 1}]);
    });
    /**
     * Test castArray() using string.
     */
    it('should return array with one string in it', () => {
        expect(castArray("abc")).to.deep.equal(["abc"]);
    });
    /**
     * Test castArray() using null as parameter.
     */
    it('should return array with null in it', () => {
        expect(castArray(null)).to.deep.equal([null]);
    });
    /**
     * Test castArray() using undefined as parameter.
     */
    it('should return array with undefined in it', () => {
        expect(castArray(undefined)).to.deep.equal([undefined]);
    });
    /**
     * Test castArray() without parameters.
     */
    it('should return empty array', () => {
        expect(castArray()).to.deep.equal([]);
    });
    /**
     * Test castArray() with two parameters.
     */
    it('should only use the first parameter when multiple are provided', () => {
        expect(castArray("abc", 123)).to.deep.equal(["abc"]);
    });
  });
});