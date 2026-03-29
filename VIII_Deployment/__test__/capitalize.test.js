import { expect } from "chai";
import capitalize from "../src/capitalize.js"

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
/*const capitalize = (string) => upperFirst(toString(string).toLowerCase())


export default capitalize

*/

describe("capitalize.js", () => {
  /**
   * Tests for the camelCase() function
   */
  describe("capitalize()", () => {
    /**
     * Test capitalize() using all uppercase.
     */
    it('should return capitalized string when using all uppercase', () => {
        expect(capitalize("TEEMUNTESTI")).to.equal("Teemuntesti");
    });
    /**
     * Test capitalize() using all lowercase.
     */
    it('should return capitalized string when using all lowercase', () => {
        expect(capitalize("teemuntesti")).to.equal("Teemuntesti");
    });
    /**
     * Test capitalize() using whitespace.
     */
    it('should return capitalized first word using whitespace', () => {
        expect(capitalize("teemun testi")).to.equal("Teemun testi");
    });
  });
});