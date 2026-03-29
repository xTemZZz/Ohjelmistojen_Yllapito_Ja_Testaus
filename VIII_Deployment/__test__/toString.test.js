import { expect } from "chai";
import toString from '../src/toString.js'

describe("toString.js", () => {
  /**
   * Tests for the toString() function
   * 
   */
  describe("toString()", () => {
    /**
     * Test toString() with null
     */
    it('should return empty string with null', () => {
      expect(toString(null)).to.equal('');
    })
    /**
     * Test toString() with negative numbers
     */
    it('should return number strings with minus sign', () => {
      expect(toString(-0)).to.equal('-0');
      expect(toString(-1)).to.equal('-1');
      expect(toString(-2)).to.equal('-2');
    });
    /**
     * Test toString() with numbers
     */
    it('should return number strings with minus sign', () => {
      expect(toString(0)).to.equal('0');
      expect(toString(1)).to.equal('1');
      expect(toString(2)).to.equal('2');
    });
    /**
     * Test toString() with array
     */
    it('should return array values as string', () => {
      expect(toString([1,2,3,4])).to.equal('1,2,3,4');
    });
  });
  
});
