import { expect } from "chai";
import camelCase from "../src/camelCase.js"

describe("camelCase.js", () => {
  /**
   * Tests for the camelCase() function
   */
  describe("camelCase()", () => {
    /**
     * Test camelCase() using whitespaces.
     */
    it('should return camelCased string when whitespaces used', () => {
        expect(camelCase("Foo Bar")).to.equal("fooBar");
    });
    /**
     * Test camelCase() using dashes.
     */
    it('should return camelCased string when whitespaces used', () => {
        expect(camelCase("--foo-bar--")).to.equal("fooBar");
    });
    /**
     * Test camelCase() using underscores
     */
    it('should return camelCased string when whitespaces used', () => {
        expect(camelCase("_Testit__on_Parhaita_PAIKAN___PAALLA")).to.equal("testitOnParhaitaPaikanPaalla");
    });
  });
});