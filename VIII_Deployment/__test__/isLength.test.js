/** Used as references for various `Number` constants. */
import { expect } from "chai";
import isLength from '../src/isLength.js'
const MAX_SAFE_INTEGER = 9007199254740991
describe("isLength.js", () => {
  /**
   * Tests for the isLength() function
   * 
   */
  describe("isLength()", () => {
    /**
     * Test isLength() with number
     */
    it('should return true with number as a parameter', () => {
        expect(isLength(3)).to.equal(true);
    });
    /**
     * Test isLength() with negative number
     */
    it('should return false with negative number as a parameter', () => {
        expect(isLength(-2)).to.equal(false);
    });
    /**
     * Test isLength() with MIN_VALUE
     */
    it('should return false with MIN_VALUE as parameter', () => {
        expect(isLength(Number.MIN_VALUE)).to.equal(false);
    });
    /**
     * Test isLength() with MAX_SAFE_INTEGER + 1
     */
    it('should return false with MAX_SAFE_INTEGER + 1 as parameter', () => {
        expect(isLength(MAX_SAFE_INTEGER + 1)).to.equal(false);
    });

    /**
     * Test isLength() with array
     */
    it('should return true with array.length as parameter', () => {
        expect(isLength([1, 2, 3, 4].length)).to.equal(true);
    });
  });
});
