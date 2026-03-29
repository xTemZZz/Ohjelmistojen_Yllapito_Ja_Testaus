import { expect } from "chai";
import countBy from '../src/countBy.js'

describe("countBy.js", () => {
  /**
   * Tests for the countBy() function
   * 
   */
  const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ]
  describe("countBy()", () => {
    /**
     * Test countBy() with different parameters.
     */
    
    it('should return list where {true: 2 and false: 1}', () => {
        expect(countBy(users, value => value.active)).to.deep.equal({ 'true': 2, 'false': 1 });
    });
    
  });
   /**
     * Test countBy() with different parameters.
     */

    it('should return list where all user should be listed and count 1', () => {
        expect(countBy(users, value => value.user)).to.deep.equal({ 'barney': 1, 'betty': 1, 'fred': 1 });
    });
});