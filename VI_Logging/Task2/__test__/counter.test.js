const counter = require('../src/counter')
const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/main");

/**
 * Mocha + chai tests for counter.js module
 */
describe("Counter API", () => {

    before(function() {
        console.log("\nStarting counter test\n")
    });

    after(function() {
        console.log("\nEnd of the counter test")
    })

    beforeEach(() => {
    counter.reset();
    });


    it('should start at 0',  () => {
        const value = counter.read();
        expect(value).to.equal(0);
    });

    it('should increase value by 1', () => {
        let value = counter.increase();
        expect(value).to.equals(1);
        value = counter.increase();
        expect(value).to.equals(2);
    });

    it('should read the current counter value', () => {
        counter.increase(); 
        counter.increase(); 
        const value = counter.read();
        expect(value).to.equals(2);
    });

    it('should reset the counter to 0', () => {
        counter.increase(); 
        counter.increase(); 
        const resetValue = counter.reset();
        expect(resetValue).to.equals(0);
        const currentValue = counter.read();
        expect(currentValue).to.equals(0);
    });

});