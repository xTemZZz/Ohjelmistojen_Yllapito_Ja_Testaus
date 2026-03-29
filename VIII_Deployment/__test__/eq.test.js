import { expect } from "chai";
import eq from '../src/eq.js'

describe("eq.js", () => {
  /**
   * Tests for the eq() function
   * 
   */
  const object = { 'a': 1 }
  const other = { 'a': 1 }

  describe("eq()", () => {
    /**
     * Test eq() with example values.
     */
    it('should return true with the same object given on both parameters', () => {
        expect(eq(object, object)).to.equal(true);
    });
    /**
     * Test eq() with example values.
     */
    it('should return false with the different objects given', () => {
        expect(eq(object, other)).to.equal(false);
    });
    /**
     * Test eq() with example values.
     */
    it('should return true with same strings', () => {
        expect(eq("test", "test")).to.equal(true);
    });
    /**
     * Test eq() with nulls.
     */
    it('should return true with nulls', () => {
        expect(eq(null, null)).to.equal(true);
    });
  });
   
});