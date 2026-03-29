import { expect } from "chai";
import isObjectLike from '../src/isObjectLike.js'

describe("isObjectLike.js", () => {
  /**
   * Tests for the isObjectLike() function
   * 
   */
  describe("isObjectLike()", () => {
    /**
     * Test isObjectLike() with new Object
     */
    it('should return true with new Object as parameter', () => {
        expect(isObjectLike(new Object)).to.equal(true);
    });
    /**
     * Test isObjectLike() with Function
     */
    it('should return false with Function as parameter', () => {
        expect(isObjectLike(Function)).to.equal(false);
    });
    /**
     * Test isObjectLike() with new String
     */
    it('should return true with new String as parameter', () => {
        expect(isObjectLike(new String(''))).to.equal(true);
    });
    /**
     * Test isObjectLike() with Array
     */
    it('should return true with Array as parameter', () => {
        expect(isObjectLike(['a', 'b', 'c'])).to.equal(true);
    });
    /**
     * Test isObjectLike() with number
     */
    it('should return false with number as parameter', () => {
        expect(isObjectLike(1)).to.equal(false);
    });
    /**
     * Test isObjectLike() with new Number
     */
    it('should return true with number as parameter', () => {
        expect(isObjectLike(new Number(0))).to.equal(true);
    });
    /**
     * Test isObjectLike() with new Number
     */
    it('should return false with null as parameter', () => {
        expect(isObjectLike(null)).to.equal(false);
    });
  });
});

