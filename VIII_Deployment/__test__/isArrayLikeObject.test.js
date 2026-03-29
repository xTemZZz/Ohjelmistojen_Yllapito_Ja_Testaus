import { expect } from "chai";
import isArrayLikeObject from '../src/isArrayLikeObject.js'

describe("isArrayLikeObject.js", () => {
  /**
   * Tests for the isArrayLikeObject() function
   * 
   */
  describe("isArrayLikeObject()", () => {
    /**
     * Test isArrayLike()Object with array.
     */
    it('should return true when array given', () => {
        expect(isArrayLikeObject([1,2,3])).to.equal(true);
    });
    /**
     * Test isArrayLikeObject() with number.
     */
    it('should return false when number given', () => {
        expect(isArrayLikeObject(12345)).to.equal(false);
    });
    /**
     * Test isArrayLikeObject() with string.
     */
    it('should return false when string given', () => {
        expect(isArrayLikeObject("test string")).to.equal(false);
    });
    /**
     * Test isArrayLikeObject() with object.
     */
    it('should return true when object with length key is given', () => {
        expect(isArrayLikeObject({'length': 1})).to.equal(true);
    });
    /**
     * Test isArrayLikeObject() with object without length.
     */
    it('should return true when object without length key', () => {
        expect(isArrayLikeObject({'a': 1, 'b': 2})).to.equal(false);
    });
  });
});
