import { expect } from "chai";
import toNumber from '../src/toNumber.js'

describe("toNumber.js", () => {
  /**
   * Tests for the toNumber() function
   * 
   */
  describe("toNumber()", () => {
    /**
     * Test toNumber() with string
     */
    it('should return numeric value of string', () => {
      expect(toNumber('6.7')).to.equal(6.7);
    })
    /**
     * Test toNumber() with whitespaces
     */
    it('should trim whitespace', () => {
      expect(toNumber('   5   ')).to.equal(5);
    });
    /**
     * Test toNumber() with binary
     */
    it('should convert binary string', () => {
      expect(toNumber('0b110')).to.equal(6);
    });
    /**
     * Test toNumber() with hex
     */
    it('should convert hex string to number', () => {
      expect(toNumber('0xA')).to.equal(10);
    });
    /**
     * Test toNumber() with hex
     */
    it('should handle Infinity', () => {
      expect(toNumber(Infinity)).to.equal(Infinity);
    });
  });
  
});
