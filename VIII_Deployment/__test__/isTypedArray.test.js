import { expect } from "chai";
import isTypedArray from '../src/isTypedArray.js'

describe("isTypedArray.js", () => {
  /**
   * Tests for the isTypedArray() function
   * 
   */
  describe("isTypedArray()", () => {
    /**
     * Test isTypedArray() with Uint8Array
     */
    it('should return true for Uint8Array()', () => {
      expect(isTypedArray(new Uint8Array())).to.equal(true);
    });
    /**
     * Test isTypedArray() with Int8Array
     */
    it('should return true for Int8Array()', () => {
      expect(isTypedArray(new Int8Array())).to.equal(true);
    });
    /**
     * Test isTypedArray() with Float32Array
     */
    it('should return true for Float32Array()', () => {
      expect(isTypedArray(new Float32Array())).to.equal(true);
    });
    /**
     * Test isTypedArray() with regular array
     */
    it('should return false for array', () => {
      expect(isTypedArray(new Array())).to.equal(false);
    });
    /**
     * Test isTypedArray() with Object
     */
    it('should return false for object', () => {
      expect(isTypedArray(new Object())).to.equal(false);
    });
  });
});

