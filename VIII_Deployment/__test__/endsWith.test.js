import { expect } from "chai";
import endsWith from '../src/endsWith.js'

describe("endsWith.js", () => {
  /**
   * Tests for the endsWith() function
   * 
   */
  describe("endsWith()", () => {
    /**
     * Test endsWith() with example values.
     */
    it('should return true if last char equals to given char', () => {
        expect(endsWith('abc', 'c')).to.equal(true);
    });
  
    /**
     * Test endsWith() with a position parameter.
     */
    it('should return true if char in given position', () => {
        expect(endsWith('Teemu', 'm', 4)).to.equal(true);
    });

    /**
     * Test endsWith() with a empty string and random params.
     */
    it('should return false with random parameters to empty string', () => {
        expect(endsWith('', 'a', 4)).to.equal(false);
    });

    /**
     * Test endsWith() with wrong letter at the end.
     */
    it('should return false with wrong char at the end', () => {
        expect(endsWith('Testejä on tehty,', 'y')).to.equal(false);
    });
  });
   
});