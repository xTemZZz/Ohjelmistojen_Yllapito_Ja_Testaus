import { expect } from "chai";
import ceil from "../src/ceil.js";

/**
 * Computes `number` rounded up to `precision`. (Round up: the smallest integer greater than or equal to a given number.)
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round up.
 * @param {number} [precision=0] The precision to round up to.
 * @returns {number} Returns the rounded up number.
 * @example
 *
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 */
/*const ceil = createRound('ceil')

export default ceil
*/
describe("ceil.js", () => {
  /**
   * Tests for the ceil() function
   */
  describe("ceil()", () => {
    /**
     * Test ceil() without using precision.
     */
    it('should round up numbers without precision', () => {
        expect(ceil(4.006)).to.equal(5);
        expect(ceil(6.004)).to.equal(7);
        expect(ceil(-3.1)).to.equal(-3);
    });
    /**
     * Test ceil() using positive precision.
     */
    it('should round up numbers with positive precision', () => {
        expect(ceil(6.004, 2)).to.equal(6.01);
        expect(ceil(1.005, 2)).to.equal(1.01);
        expect(ceil(0.1234, 3)).to.equal(0.124);
    });
    /**
     * Test ceil() using negative precision.
     */
    it('should round up numbers with negative precision', () => {
        expect(ceil(6040, -2)).to.equal(6100);
        expect(ceil(987, -1)).to.equal(990);
        expect(ceil(1523, -3)).to.equal(2000);
    });
    /**
     * Test ceil() using zero.
     */
    it('should handle zero and negative numbers', () => {
        expect(ceil(0)).to.equal(0);
    });
    /**
     * Test ceil() using Not a number parameter.
     */
    it('should return NaN for non-numeric inputs', () => {
        expect(ceil("abc")).to.be.NaN;
    });

  });
});