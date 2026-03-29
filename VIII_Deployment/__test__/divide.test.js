import { expect } from "chai";
import divide from '../src/divide.js'

describe("divide.js", () => {
  /**
   * Tests for the divide() function
   * 
   */
  describe("divide()", () => {
    /**
     * Test divide() with example values.
     */
    it('should return a decimal number', () => {
        expect(divide(6,4)).to.equal(1.5);
    });
    /**
     * Test divide() 0 as divider.
     */
    it('shouldnt crash with 0 divider', () => {
        expect(divide(10,0)).to.equal(Infinity);
    });
    /**
     * Test divide() with same numbers.
     */
    it('should return 1 if divided with the same number', () => {
        expect(divide(3,3)).to.equal(1);
    });
  });
   
});