import { expect } from "chai";
import isEmpty from '../src/isEmpty.js'

describe("isEmpty.js", () => {
  /**
   * Tests for the isEmpty() function
   * 
   */
  describe("isEmpty()", () => {
    /**
     * Test isEmpty() with number
     */
    it('should return true number as a parameter', () => {
        expect(isEmpty(0)).to.equal(true);
    });
    /**
     * Test isEmpty() with null
     */
    it('should return true when null as parameter', () => {
        expect(isEmpty(null)).to.equal(true);
    });
    /**
     * Test isEmpty() with array
     */
    it('should return false when array as parameter', () => {
        expect(isEmpty([1,2,3])).to.equal(false);
    });
    /**
     * Test isEmpty() with object
     */
    it('should return false when object as parameter', () => {
        expect(isEmpty({a: 1})).to.equal(false);
    });
    /**
     * Test isEmpty() with object
     */
    it('should return false when empty array as parameter', () => {
        expect(isEmpty([])).to.equal(true);
    });
    /**
     * Test isEmpty() with new object
     */
    it('should return true when new Object as parameter', () => {
        expect(isEmpty(new Object)).to.equal(true);
    });
    });
    /**
     * Test isEmpty() with one value added to new Set
     */
    it('should return false for non-empty Set', () => {
      const set = new Set();
      set.add(1);
      expect(isEmpty(set)).to.equal(false);
    });

  });

