import { describe, test, it, expect } from "vitest";

describe("Objects", () => {
  it("dont use toBe in Objects case", () => {
    const result = { name: "Arsim" };
    expect(result).toEqual({ name: "Arsim" });
  });

  it("In case we add another porperty test case (tight assertion)", () => {
    const result = { name: "Arsim"}; //{ name: "Arsim", age: 32 };
    expect(result).toEqual({ name: "Arsim" });
  });

  it("In case we add another porperty test case (loose assertion)", () => {
    const result = { name: "Arsim", age: 32 };
    expect(result).toMatchObject({ name: "Arsim" });
  });

  it("In case we add another porperty test case (Better assertion)", () => {
    const result = { name: "Arsim", age: 32 };
    expect(result).toHaveProperty("name");
  });

  it("Checks if the value stored in this property is a string", () => {
    const result = { name: "Arsim", age: 32 };
    expect(typeof result.name).toBe("string")
  });
});

describe("Strings", () => {
  it("loose test case", () => {
    const result = "The requested file was not found.";
    expect(result).toBeDefined();
  });

  it("tight test case", () => {
    const result = "The requested file was not found.";
    expect(result).toBe("The requested file was not found.");
  });

  it("Better (not to tight and not to general) test case", () => {
    const result = "The requested file was not found.";
    expect(result).toMatch(/not found/i)
  });
});

describe("Arrays", () => {
  it("loose test case", () => {
    const result = [1, 2, 3];
    expect(result).toBeDefined();
  });

  it("tight test case", () => {
    const result = [3, 1, 2];
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
  });

  it("length of array and to specific test case", () => {
    const result = [3, 1, 2];
    expect(result).toHaveLength(3);
  });

  it("Better (not to tight and not to general) as long we have elements in array", () => {
    const result = [3, 1, 2, 4];
    expect(result.length).toBeGreaterThan(0);
  });
});
