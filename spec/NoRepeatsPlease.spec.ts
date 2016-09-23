import {NoRepeats} from "../src/NoRepeatsPlease";

describe('No Repeats Please', () => {
    it('true take input of string and return a number', () => {
        expect(NoRepeats.checkRepeats("")).toEqual(jasmine.any(Number));
    });
    it('true take input of string "aab" and return number 2', () => {
        expect(NoRepeats.checkRepeats("aab")).toEqual(2);
    });
    it('true take input of string "aaa" and return number 0', () => {
        expect(NoRepeats.checkRepeats("aaa")).toEqual(0);
    });
    it('true take input of string "aabb" and return number 8', () => {
        expect(NoRepeats.checkRepeats("aabb")).toEqual(8);
    });
    it('true take input of string "abcdefa" and return number 3600', () => {
        expect(NoRepeats.checkRepeats("abcdefa")).toEqual(3600);
    });
    it('true take input of string "abfdefa" and return number 2640', () => {
        expect(NoRepeats.checkRepeats("abfdefa")).toEqual(2640);
    });
    it('true take input of string "zzzzzzzz" and return number 0', () => {
        expect(NoRepeats.checkRepeats("zzzzzzzz")).toEqual(0);
    });
    it('true take input of string "a" and return number 1', () => {
        expect(NoRepeats.checkRepeats("a")).toEqual(1);
    });
    it('true take input of string "aaab" and return number 0', () => {
        expect(NoRepeats.checkRepeats("aaab")).toEqual(0);
    });
    it('true take input of string "aaabb" and return number 12', () => {
        expect(NoRepeats.checkRepeats("aaabb")).toEqual(12);
    });
});