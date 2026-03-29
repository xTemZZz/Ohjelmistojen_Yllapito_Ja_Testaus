import { expect } from "chai";
import keys from '../src/keys.js'

describe("keys.js", () => {
  /**
   * Tests for the keys() function
   * 
   */
  describe("keys()", () => {
    /**
     * Test keys() with array
     */
    it('should return indexes for array', () => {
      expect(keys([1,2,3,4,5])).to.deep.equal(['0','1','2','3','4']);
    });
    /**
     * Test keys() with object
     */
    it('should return keys for object', () => {
      expect(keys({'a': 13, 'b': 18, 'd': 27, 'test': 0})).to.deep.equal(['a','b','d','test']);
    });
    /**
     * Test keys() with empty object
     */
    it('should return empty list for empty object', () => {
      expect(keys({})).to.deep.equal([]);
    });
    /**
     * Test keys() with empty object
     */
    it.skip('should return indexes for string', () => {
      expect(keys("test")).to.deep.equal(['0','1','2','3']);
    });
    /**
     * Test keys() with empty object
     */
    it('should return empty list for number', () => {
      expect(keys(12345)).to.deep.equal([]);
    });
  });
});

