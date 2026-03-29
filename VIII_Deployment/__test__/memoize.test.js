import { expect } from "chai";
import memoize from '../src/memoize.js';

describe("memoize.js", () => {
  /**
   * Tests for the memoize() function
   * 
   */
  describe("memoize()", () => {
    /**
     * Test memoize() with same parameter
     */
    it('should return same result for same input', () => {
      const memoized = memoize((n) => n * 2);

      expect(memoized(2)).to.equal(4);
      expect(memoized(2)).to.equal(4);
    });
    /**
     * Test memoize() from cache
     */
    it('should cache result (function called only once)', () => {
      let count = 0;

      const fn = (n) => {
        count++;
        return n * 2;
      };

      const memoized = memoize(fn);

      memoized(2);
      memoized(2);

      expect(count).to.equal(1);
    });
    /**
     * Test memoize() with different inputs
     */
    it('should not mix different inputs', () => {
      const memoized = memoize((n) => n * 2);

      expect(memoized(2)).to.equal(4);
      expect(memoized(3)).to.equal(6);
    });
    /**
     * Test memoize() cache check
     */
    it('should expose cache', () => {
      const fn = (n) => n * 2;
      const memoized = memoize(fn);

      memoized(2);

      expect(memoized.cache.has(2)).to.equal(true);
      expect(memoized.cache.get(2)).to.equal(4);
    });
    /**
     * Test memoize() without function
     */
    it('should throw if func is not function', () => {
      expect(() => memoize(123)).to.throw();
    });
  });
});
