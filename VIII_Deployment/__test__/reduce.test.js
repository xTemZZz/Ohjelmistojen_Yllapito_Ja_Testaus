import { expect } from "chai";
import reduce from '../src/reduce.js'

describe("reduce.js", () => {
  /**
   * Tests for the reduce() function
   * 
   */
  describe("reduce()", () => {
    /**
     * Test reduce() with sum list
     */
    it('should sum array values', () => {
      expect(reduce([1,2], (sum, n) => sum + n, 0)).to.equal(3);
    })
    /**
     * Test reduce() to group object values
     */
    it('should group object values correctly', () => {
      expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
        }, {}
      )).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
    })
  });
});
