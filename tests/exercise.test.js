import { describe, expect, it } from "vitest";
import { calculateAverage, factorial } from "../src/exercise";

describe("calculateAveerage", () => {
    it("should return NaN if given an empty array", () =>  {
        expect(calculateAverage([])).toBe(NaN);
    });

    it("should calculate the average of an array with a single element", () =>  {
        expect(calculateAverage([1])).toBe(1);
    });

    it("should calculate the average of an array with two element", () =>  {
        expect(calculateAverage([1, 2])).toBe(1.5);
    });

    it("should calculate the average of an array with three element", () =>  {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    });
})

describe("factorial", () => {
    it("should return 1 if given 0", () => {
        expect(factorial(0)).toBe(1);
    });

    it("should return 1 if given 1", () => {
        expect(factorial(1)).toBe(1);
    });

    it("should return 2 if given 2", () => {
        expect(factorial(2)).toBe(2);
    });

    it("should return 6 if given 3", () => {
        expect(factorial(3)).toBe(6);
    });

    it("should return 24 if given 4", () => {
        expect(factorial(4)).toBe(24);
    });

    it("should return undefined if given a negative number", () => {
        expect(factorial(-4)).toBeUndefined();
    });
})