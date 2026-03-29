import { expect } from "chai";
import isArrayLike from '../src/isArrayLike.js'

describe("isArrayLike.js", () => {
  /**
   * Tests for the isArrayLike() function
   * 
   */
  describe("isArrayLike()", () => {
    /**
     * Test isArrayLike() with array.
     */
    it('should return true when array given', () => {
        expect(isArrayLike([1,2,3])).to.equal(true);
    });
    /**
     * Test isArrayLike() with number.
     */
    it('should return false when number given', () => {
        expect(isArrayLike(12345)).to.equal(false);
    });
    /**
     * Test isArrayLike() with string.
     */
    it('should return true when string given', () => {
        expect(isArrayLike("test string")).to.equal(true);
    });
    /**
     * Test isArrayLike() with object.
     */
    it('should return true when object with length key is given', () => {
        expect(isArrayLike({'length': 1})).to.equal(true);
    });
    /**
     * Test isArrayLike() with object without length.
     */
    it('should return false when object without length key', () => {
        expect(isArrayLike({'a': 1, 'b': 2})).to.equal(false);
    });
  });
});
