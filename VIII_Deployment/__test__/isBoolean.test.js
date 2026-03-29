import { expect } from "chai";
import isBoolean from '../src/isBoolean.js'

describe("isBoolean.js", () => {
  /**
   * Tests for the isBoolean() function
   * 
   */
  describe("isBoolean()", () => {
    /**
     * Test isBoolean() tested with true and false.
     */
    it('should return true when true and false given', () => {
        expect(isBoolean(false)).to.equal(true);
        expect(isBoolean(true)).to.equal(true);
    });
    /**
     * Test isBoolean() tested with undefined, NaN and null.
     */
    it('should return false null, undefined and Nan given', () => {
        expect(isBoolean(undefined)).to.equal(false);
        expect(isBoolean(NaN)).to.equal(false)
        expect(isBoolean(null)).to.equal(false)
    });
    /**
     * Test isBoolean() Object with array.
     */
    it('should return true when comparing', () => {
        expect(isBoolean('x' === 2)).to.equal(true);
    });
    /**
     * Test isBoolean() Object with array.
     */
    it('should return false when using 1 as value', () => {
        expect(isBoolean(1)).to.equal(false);
    });
    
  
  });
});
