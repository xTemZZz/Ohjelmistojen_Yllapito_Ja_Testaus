import { expect } from "chai";
import difference from '../src/difference.js'


describe("difference.js", () => {
  /**
   * Tests for the difference() function
   * 
   */
  describe("difference()", () => {
    /**
     * Test difference() with example values.
     */
    
    it('should return list only containing 1 value', () => {
        expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
    });
    /**
     * Test difference() with different values.
     */
    it('should return list with one negative and one positive value', () => {
        expect(difference([2, -1, 4, 5], [2, 4, 3])).to.deep.equal([-1, 5]);
    });
    /**
     * Test difference() with empty list.
     */
    it('should return empty list because none was given', () => {
        expect(difference([], [2, 4, 3])).to.deep.equal([]);
    });
    /**
     * Test difference() with exact lists.
     */
    it('should return empty list because lists are equal', () => {
        expect(difference([2,4 ,3], [2, 4, 3])).to.deep.equal([]);
    });
  });
   
});