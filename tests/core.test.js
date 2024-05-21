import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
    it("should return the firs argument if arguments are equal", () => {
      expect(max(2, 2)).toBe(2);
    });
  });
