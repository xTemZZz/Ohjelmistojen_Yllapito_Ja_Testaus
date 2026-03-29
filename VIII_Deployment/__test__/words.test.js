import { expect } from "chai";
import words from '../src/words.js'

describe("words.js", () => {
  /**
   * Tests for the words() function
   * 
   */
  describe("words()", () => {
    /**
     * Test words() with example sentence
     */
    it('should split basic sentence into words', () => {
      expect(words('fred, barney, & pebbles'))
        .to.deep.equal(['fred', 'barney', 'pebbles']);
    });
    /**
     * Test words with example sentence and custom pattern
     */
    it('should use custom regex pattern', () => {
      expect(words('fred, barney, & pebbles', /[^, ]+/g))
        .to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });
    /**
     * Test words() with empty string
     */
    it('should return empty array for empty string', () => {
      expect(words('')).to.deep.equal([]);
    });
    /**
     * Test words() without matching pattern
     */
    it('should return empty array if no matches', () => {
      expect(words('!!!')).to.deep.equal([]);
    });
    /**
     * Test words() with camelCase
     */
    it('should split camelCase words', () => {
      expect(words('helloWorld')).to.deep.equal(['hello', 'World']);
    });
  });
  
});
