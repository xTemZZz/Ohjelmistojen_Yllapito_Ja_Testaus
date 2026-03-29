import { expect } from "chai";
import at from "../src/at.js"

/**
 * Unit tests for at.js
 *
 * @module __test__/at.test.js
 */
describe("at.js", () => {
  /**
   * Tests for the at() function
   */
  describe("at()", () => {
    /**
     * It should correctly return list for a single path.
     */
    it('should return value for a single path', () => {
        const obj = { a: 1, b: 2 };
        expect(at(obj, 'a')).to.deep.equal([1]);
    });
    /**
     * It should correctly return list for multiple paths.
     */
    it('should return values for multiple paths', () => {
        const obj = { a: 1, b: 2 };
        expect(at(obj, 'a', 'b')).to.deep.equal([1, 2]);
    });
    /**
     * It should correcly return values from nested paths.
     */
    it('should handle nested objects', () => {
        const obj = { a: { x: 1 }, b: { y: 2 } };
        expect(at(obj, 'a.x', 'b.y')).to.deep.equal([1, 2]);
    });
    /**
     * It should return undefined for missing path
     */
    it('should return undefined for missing paths', () => {
        const obj = { a: 1 };
        expect(at(obj, 'b')).to.deep.equal([undefined]);
    });
  });
});
