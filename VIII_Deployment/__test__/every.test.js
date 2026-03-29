import { expect } from "chai";
import every from '../src/every.js'

describe("every.js", () => {
  /**
   * Tests for the every() function
   * 
   */

  describe("every()", () => {
    /**
     * Test every() with empty list.
     */
    it('should return true with empty lists', () => {
        expect(every([], Boolean)).to.equal(true);
    });

    /**
     * Test every() with random parameters.
     */
    it('should return true with random parameters', () => {
        expect(every([1, true, "testString"], Boolean)).to.equal(true);
    });
    /**
     * Test every() with one falsy value.
     */
    it('should return false if any element fails the predicate', () => {
      expect(every([1, 0, true], Boolean)).to.equal(false);
    });
    /**
     * Test every() with null array.
     */
    it('should return true for null array', () => {
      expect(every(null, Boolean)).to.equal(true);
    });
    /**
     * Test every() with custom predicate.
     */
    it('should work with custom predicate', () => {
      expect(every([2, 4, 6], x => x % 2 === 0)).to.equal(true);
    });
  });
   
});