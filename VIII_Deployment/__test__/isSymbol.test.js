import { expect } from "chai";
import isSymbol from '../src/isSymbol.js'

describe("isSymbol.js", () => {
  /**
   * Tests for the isSymbol() function
   * 
   */
  describe("isSymbol()", () => {
    /**
     * Test isSymbol() with primitive Symbol
     */
    it('should return true for Symbol()', () => {
      expect(isSymbol(Symbol())).to.equal(true);
    });
     /**
     * Test isSymbol() with built-in Symbol
     */
    it('should return true for Symbol.iterator', () => {
      expect(isSymbol(Symbol.iterator)).to.equal(true);
    });
    /**
     * Test isSymbol() with string
     */
    it('should return false for string', () => {
      expect(isSymbol("abc")).to.equal(false);
    });
    /**
     * Test isSymbol() with number
     */
    it('should return false for number', () => {
      expect(isSymbol(123)).to.equal(false);
    });
    /**
     * Test isSymbol() with object
     */
    it('should return false for object', () => {
      expect(isSymbol({'a': 1})).to.equal(false);
    });
  });
});

