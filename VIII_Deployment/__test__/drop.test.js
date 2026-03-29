import { expect } from "chai";
import drop from '../src/drop.js'

describe("drop.js", () => {
  /**
   * Tests for the drop() function
   * 
   */
  describe("drop()", () => {
    /**
     * Test drop() without other value.
     */
    it('should return a list without first value', () => {
        expect(drop([1, 2, 3])).to.deep.equal([2,3]);
    });
    /**
     * Test drop() with taking first three values off.
     */
    it('should return a list without three leading values', () => {
        expect(drop([1, 2, 3, 4, 5 ,6], 3)).to.deep.equal([4,5,6]);
    });
    /**
     * Test drop() with empty list.
     */
    it('should return a empty list if no values given', () => {
        expect(drop([])).to.deep.equal([]);
    });
    /**
     * Test drop() with 0 values to remove.
     */
    it('should return a empty list if no values given', () => {
        expect(drop([1,2,3], 0)).to.deep.equal([1,2,3]);
    });
    /**
     * Test drop() with strings.
     */
    it('should return a exact list with strings and 0 as a number of items to remove', () => {
        expect(drop(["abc", "def", "ghx"], 0)).to.deep.equal(["abc", "def", "ghx"]);
    });
  });
   
});