import { expect } from "chai";
import chunk from "../src/chunk.js"

describe("chunk.js", () => {
  /**
   * Tests for the chunk() function
   */
  describe("chunk()", () => {
    /**
     * Test chunk() to return eqaul sized arrays.
     */
    it('should return two arrays with two as parameter', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });
    /**
     * Test chunk() to return work with unequal dividing.
     */
    it('should return two arrays with two parameters', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).to.deep.equal([['a', 'b', 'c'], ['d']]);
    });
    /**
     * Test chunk() to return empty array.
     */
    it('should return empty array', () => {
        expect(chunk([], 2)).to.deep.equal([]);
    });
  });
});