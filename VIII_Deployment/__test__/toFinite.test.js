const INFINITY = 1 / 0

import { expect } from "chai";
import toFinite from '../src/toFinite.js'

describe("toFinite.js", () => {
  /**
   * Tests for the toFinite() function
   * 
   */
  describe("toFinite()", () => {
    /**
     * Test toFinite() with infinity to return max_val
     */
    it('should return max value', () => {
      expect(toFinite(INFINITY)).to.equal(1.7976931348623157e+308);
    })
    /**
     * Test toFinite() with -infinity to return -max_val
     */
    it('should return -max value', () => {
      expect(toFinite(-INFINITY)).to.equal(-1.7976931348623157e+308);
    })
    /**
     * Test toFinite() without value or falsy value
     */
    it('should return 0 with falsy value', () => {
      expect(toFinite('a')).to.equal(0);
    })
    /**
     * Test toFinite() with value as string
     */
    it('should return numeric value of the string', () => {
      expect(toFinite('1.9')).to.equal(1.9);
    })
  });
  
});
