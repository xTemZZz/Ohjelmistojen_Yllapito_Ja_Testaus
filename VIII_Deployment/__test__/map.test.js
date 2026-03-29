import { expect } from "chai";
import map from '../src/map.js'

describe("map.js", () => {
  /**
   * Tests for the map() function
   * 
   */
  describe("map()", () => {
    /**
     * Test map() with squaring
     */
    it('should return array of squared values', () => {
      expect(map([4,8], (n) => {return n*n})).to.deep.equal([16,64]);
    })
    /**
     * Test map() with adding index to value
     */
    it('should return indexes for array', () => {
      expect(map([4,8], (n,i) => {return n+i})).to.deep.equal([4,9]);
    })
    /**
     * Test map() with empty value
     */
    it('should return indexes for array', () => {
      expect(map([], (n,i) => {return n*n})).to.deep.equal([]);
    })
    /**
     * Test map() with null
     */
    it('should return indexes for array', () => {
      expect(map(null, (n) => {return n})).to.deep.equal([]);
    })
  });
});

