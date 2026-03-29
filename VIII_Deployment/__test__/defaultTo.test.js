import { expect } from "chai";
import defaultTo from '../src/defaultTo.js'

describe("defaultTo.js", () => {
  /**
   * Tests for the defaultTo() function
   * 
   */
  describe("defaultTo()", () => {
    /**
     * Test defaultTo() with value.
     */
    
    it('should not return defaultValue because value is 1', () => {
        expect(defaultTo(1, 10)).to.equal(1);
    });
    
    /**
     * Test defaultTo() with null.
     */
    it('should return defaultValue because value is null', () => {
        expect(defaultTo(null, 5)).to.equal(5);
    });
    /**
     * Test defaultTo() with NaN.
     */
    
    it('should return defaultValue because value is NaN', () => {
        expect(defaultTo(NaN, 3)).to.equal(3);
    });

    /**
     * Test defaultTo() with undefined.
     */
    it('should return defaultValue because value is undefined', () => {
        expect(defaultTo(undefined, 1)).to.equal(1);
    });
  });
   
});