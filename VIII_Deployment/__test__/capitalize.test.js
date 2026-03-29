import { expect } from "chai";
import capitalize from "../src/capitalize.js"

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