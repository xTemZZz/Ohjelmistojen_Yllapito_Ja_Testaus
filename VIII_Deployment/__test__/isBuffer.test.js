import { expect } from "chai";
import isBuffer from '../src/isBuffer.js'

describe("isBuffer.js", () => {
  /**
   * Tests for the isBuffer() function
   * 
   */
  
  describe("isBuffer()", () => {
    /**
     * Test isBuffer() tested with buffer. // EXAMPLE 
     */
    it.skip('should return true when new Buffer as parameter', () => {
        expect(isBuffer(Buffer.alloc(2))).to.equal(true);
    });
    /**
     * Test isBuffer() tested with buffer. // EXAMPLE 
     */
    it.skip('should return true when new Uint8Array as parameter', () => {
        expect(isBuffer(new Uint8Array(2))).to.equal(false);
    });
  });
});
