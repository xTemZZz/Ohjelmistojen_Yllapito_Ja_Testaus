import { expect } from "chai";
import toInteger from '../src/toInteger.js'

describe("toInteger.js", () => {
  /**
   * Tests for the toInteger() function
   * 
   */
  describe("toInteger()", () => {
    /**
     * Test toInteger() with infinity to return max_val
     */
    it('should return max value', () => {
      expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
    })
    /**
     * Test toInteger() with -infinity to return -max_val
     */
    it('should return -max value', () => {
      expect(toInteger(-Infinity)).to.equal(-1.7976931348623157e+308);
    })
    /**
     * Test toInteger() without value or falsy value
     */
    it('should return 0 with falsy value', () => {
      expect(toInteger('a')).to.equal(0);
    })
    /**
     * Test toInteger() with value as string
     */
    it('should return leading value of decimal number', () => {
      expect(toInteger('1.9')).to.equal(1);
      expect(toInteger(3.9)).to.equal(3);
    })
  });
  
});
