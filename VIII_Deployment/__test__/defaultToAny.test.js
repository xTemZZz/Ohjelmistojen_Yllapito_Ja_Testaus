import { expect } from "chai";
import defaultToAny from '../src/defaultToAny.js'


describe("defaultToAny.js", () => {
  /**
   * Tests for the defaultToAny() function
   * 
   */
  describe("defaultToAny()", () => {
    /**
     * Test defaultToAny() with value.
     */
    
    it('should not return defaultValue because value is 1', () => {
        expect(defaultToAny(1, 10, 20)).to.equal(1);
    });
    
    /**
     * Test defaultToAny() with only a value.
     */
    it('should not return defaultValue because value is 1', () => {
        expect(defaultToAny(1)).to.equal(1);
    });
    /**
     * Test defaultToAny() with out any value.
     */
    it('should return last given defaultValue', () => {
        expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
    });
    /**
     * Test defaultToAny() with second.
     */
    it('should return last given defaultValue, others falsey', () => {
        expect(defaultToAny(undefined, null, NaN, undefined, 20)).to.equal(20);
    });
    /**
     * Test defaultToAny() with out any parameter.
     */
    it('should return undefined if no parameters given', () => {
        expect(defaultToAny()).to.be.undefined;
    });
  });
   
});