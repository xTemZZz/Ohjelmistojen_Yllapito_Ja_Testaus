import { expect } from "chai";
import isArguments from '../src/isArguments.js'

describe("isArguments.js", () => {
  /**
   * Tests for the isArguments() function
   * 
   */
  describe("isArguments()", () => {
    /**
     * Test isArguments() with given example.
     */
    it('should return true when arguments given to isArguments function', () => {
        expect(isArguments(function() { return arguments }())).to.equal(true);
    });
    /**
     * Test isArguments() with given example.
     */
    it('should return false if array is given', () => {
        expect(isArguments([1, 2, 3])).to.equal(false);
    });
  });
  
   
});
