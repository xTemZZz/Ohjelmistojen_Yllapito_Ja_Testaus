import { expect } from "chai";
import upperFirst from '../src/upperFirst.js'

describe("upperFirst.js", () => {
  /**
   * Tests for the upperFirst() function
   * 
   */
  describe("upperFirst()", () => {
    /**
     * Test upperFirst() with all lower case
     */
    it('should return word with first character as uppercase', () => {
      expect(upperFirst('teemu')).to.equal('Teemu');
    })
    /**
     * Test upperFirst() with all upper case
     */
    it('should return word with all uppercase', () => {
      expect(upperFirst('TEEMU')).to.equal('TEEMU');
    })
    /**
     * Test upperFirst() with empty string
     */
    it('should return empty string', () => {
      expect(upperFirst('')).to.equal('');
    })
    /**
     * Test upperFirst() with number
     */
    it('should throw an error when giving number as parameter', () => {
      expect(() => upperFirst(1)).to.throw();
    })
  });
  
});
