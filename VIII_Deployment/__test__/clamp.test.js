import { expect } from "chai";
import clamp from "../src/clamp.js"

describe("clamp.js", () => {
  /**
   * Tests for the clamp() function
   */
  describe("clamp()", () => {
    /**
     * Test clamp() with different parameters.
     */
    it('should return lower limit', () => {
        expect(clamp(-10, -5, 5)).to.equal(-5);
    });
    /**
     * Test clamp() with different parameters.
     */
    it('should return upper limit', () => {
        expect(clamp(10, -5, 5)).to.equal(5);
    });
  });
});