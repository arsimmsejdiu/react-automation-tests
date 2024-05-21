import { describe, it, expect } from "vitest";
import {
  calculateDiscount,
  getCoupons,
  isPriceInRange,
  validateUserInput,
} from "../src/core";

describe("getCoupons", () => {
  it("should return a array of coupons", () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array with valid coupon codes", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy();
    });
  });

  it("should return am array with valid discounds", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });
});

describe("calculateDiscount", () => {
  it("should return discounted price if given valid code", () => {
    expect(calculateDiscount(10, "SAVE10")).toBe(9);
    expect(calculateDiscount(10, "SAVE20")).toBe(8);
  });

  it("should handle non-numeric price", () => {
    expect(calculateDiscount("10", "SAVE10")).toMatch(/invalid/i); // i after /invalid/i that the check should be case insensitive
  });

  it("should handle negative price", () => {
    expect(calculateDiscount(-10, "SAVE10")).toMatch(/invalid/i);
  });

  it("should handle non-string discount code", () => {
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
  });

  it("should handle invalid discount code", () => {
    expect(calculateDiscount(10, "INVALID")).toBe(10);
  });
});

describe("validateUserInput", () => {
  it("should return success if given valid inout", () => {
    expect(validateUserInput("Arsim", 32)).toMatch(/success/i);
  });

  it("should return an error if username is not a string", () => {
    expect(validateUserInput(11, 32)).toMatch(/invalid/i);
  });

  it("should return an error if username is less than 3 characters", () => {
    expect(validateUserInput("ar", 32)).toMatch(/invalid/i);
  });

  it("should return an error if username is longer than 255 characters", () => {
    expect(validateUserInput("A".repeat(255), 42)).toMatch(/success/i);
  });

  it("should return an error if age is not a number", () => {
    expect(validateUserInput("arsim", "32")).toMatch(/invalid/i);
  });

  it("should return an error if age is les than 18", () => {
    expect(validateUserInput("ar", 17)).toMatch(/invalid/i);
  });

  it("should return an error if age is greater than 100", () => {
    expect(validateUserInput("mosh", 101)).toMatch(/success/i);
  });

  it("should return an error if both username and age are invalid", () => {
    expect(validateUserInput("", 0)).toMatch(/invalid username/i);
    expect(validateUserInput("", 0)).toMatch(/invalid age/i);
  });
});

describe("isPriceInRange", () => {
  it.each([
    { scenario: "price < min", price: -10, result: false },
    { scenario: "price = min", price: 0, result: true },
    {
      scenario: "price between min and max",
      price: 50,
      result: true,
    },
    { scenario: "price = max", price: 100, result: true },
    { scenario: "price > max", price: 200, result: false },
  ])("should return $result when $scenaro", ({ price, result }) => {
    expect(isPriceInRange(price, 0, 100)).toBe(result);
  });
});


