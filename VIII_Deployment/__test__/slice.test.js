import { expect } from "chai";
import slice from '../src/slice.js'

describe("slice.js", () => {
  /**
   * Tests for the slice() function
   * 
   */
  describe("slice()", () => {
    /**
     * Test slice() to cut in to half
     */
    it('should return list correctly', () => {
      expect(slice([1,2,3,4], 2)).to.deep.equal([3,4]);
    })
    /**
     * Test slice() to not remove any values
     */
    it('should return exact same list', () => {
      expect(slice([1,2,3,4],0)).to.deep.equal([1,2,3,4]);
    })

    /**
     * Test slice() to remove all values + 1
     */
    it('should return empty list', () => {
      expect(slice([1,2,3,4],5)).to.deep.equal([]);
    })

    
    /**
     * Test slice() with null
     */
    it('should return empty list with null', () => {
      expect(slice(null,5)).to.deep.equal([]);
    })
  });
});
