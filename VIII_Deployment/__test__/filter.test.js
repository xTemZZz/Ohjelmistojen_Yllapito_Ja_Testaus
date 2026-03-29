import { expect } from "chai";
import filter from '../src/filter.js'

describe("filter.js", () => {
  /**
   * Tests for the filter() function
   * 
   */
   const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ]
  describe("filter()", () => {
    /**
     * Test filter() with example values for active users.
     */
    it('should return object with active users', () => {
        expect(filter(users, ({ active }) => active)).to.deep.equal([{'user': 'barney', 'active': true}]);
    });
    /**
     * Test filter() with example values for username.
     */
    it('should return object with active users', () => {
        expect(filter(users, ({ user }) => user === "fred")).to.deep.equal([{'user': 'fred', 'active': false}]);
    });
    /**
     * Test filter() with custom predicate.
     */
    it('should return object with active users', () => {
        expect(filter(users, ({ user }) => user === "fred")).to.deep.equal([{'user': 'fred', 'active': false}]);
    });
  });
   
});
