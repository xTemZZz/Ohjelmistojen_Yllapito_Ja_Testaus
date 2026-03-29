import { expect } from "chai";
import isDate from '../src/isDate.js'

describe("isDate.js", () => {
  /**
   * Tests for the isDate() function
   * 
   */
  describe("isDate()", () => {
    /**
     * Test isDate() tested with new Date. // EXAMPLE 
     */
    it('should return true when new Date as parameter', () => {
        expect(isDate(new Date)).to.equal(true);
    });
    /**
     * Test isDate() tested with buffer. // EXAMPLE 
     */
    it('should return true when new Buffer as parameter', () => {
        expect(isDate('Mon April 23 2012')).to.equal(false);
    });

    /**
     * Test isDate() tested with timestamp
     */
    it('should return true for Date created with timestamp', () => {
      expect(isDate(new Date(2026, 2, 27))).to.equal(true);
    });
    /**
     * Test isDate() tested with boolean
     */
    it('should return false for boolean', () => {
      expect(isDate(true)).to.equal(false);
      expect(isDate(false)).to.equal(false);
    });
    });

  });

