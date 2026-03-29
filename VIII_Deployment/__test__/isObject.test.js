import { expect } from "chai";
import isObject from '../src/isObject.js'

describe("isObject.js", () => {
  /**
   * Tests for the isObject() function
   * 
   */
  describe("isObject()", () => {
    /**
     * Test isObject() with new Object
     */
    it('should return true with new Object as parameter', () => {
        expect(isObject(new Object)).to.equal(true);
    });
    /**
     * Test isObject() with Function
     */
    it('should return true with Function as parameter', () => {
        expect(isObject(Function)).to.equal(true);
    });
    /**
     * Test isObject() with new String
     */
    it('should return true with new String as parameter', () => {
        expect(isObject(new String(''))).to.equal(true);
    });
    /**
     * Test isObject() with Array
     */
    it('should return true with Array as parameter', () => {
        expect(isObject(['a', 'b', 'c'])).to.equal(true);
    });
    /**
     * Test isObject() with number
     */
    it('should return false with number as parameter', () => {
        expect(isObject(1)).to.equal(false);
    });
    /**
     * Test isObject() with new Number
     */
    it('should return true with number as parameter', () => {
        expect(isObject(new Number(0))).to.equal(true);
    });
    /**
     * Test isObject() with new Number
     */
    it('should return false with null as parameter', () => {
        expect(isObject(null)).to.equal(false);
    });
  });
});

