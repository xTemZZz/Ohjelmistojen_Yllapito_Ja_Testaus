import { expect } from "chai";
import compact from "../src/compact.js"

describe("compact.js", () => {
  /**
   * Tests for the compact() function
   */
  describe("compact()", () => {
    /**
     * Test compact() with different parameters.
     */
    it('should return list without falsey values', () => {
        expect(compact([0, 1, false, 2, '', 3])).to.deep.equal([1,2,3]);
    });
    /**
     * Test compact() with empty array.
     */
    it('should return empty array', () => {
        expect(compact([])).to.deep.equal([]);
    });
  });
});