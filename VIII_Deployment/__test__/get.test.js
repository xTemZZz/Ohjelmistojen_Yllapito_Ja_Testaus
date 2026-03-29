import { expect } from "chai";
import get from '../src/get.js'

describe("get.js", () => {
  /**
   * Tests for the get() function
   * 
   */
  describe("get()", () => {
    /**
     * Test get() with example input.
     */
    it('should return object from object with longer path', () => {
        expect(get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c')).to.equal(3);
    });
    /**
     * Test get() with example input.
     */
    it('should return object from short object', () => {
        expect(get({ 'a': 1 }, 'a')).to.equal(1);
    });
    /**
     * Test get() with list.
     */
    it('should return object from list with given index', () => {
        expect(get([1,2,3,4,5,6,7], 2)).to.equal(3);
    });
    /**
     * Test get() without parameter value
     */
    it('should return undefined if no parameter is given', () => {
        expect(get([1,2,3,4,5,6,7])).to.equal(undefined);
    });
    /**
     * Test get() with defaultValue.
     */
    it('should return default value', () => {
        expect(get({ 'a': [{ 'b': { 'c': 3 } }] }, 'd[1].c', "default")).to.equal("default");
    });
  });
  
   
});
