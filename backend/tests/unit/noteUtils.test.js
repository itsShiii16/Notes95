const {
  validateNote,
  isAllowedColor
} = require("../../src/noteUtils");

describe("notes95 note utility functions", () => {
  test("should return an error when title is empty", () => {
    const result = validateNote("", "This is valid note content.", "yellow");

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Title is required.");
  });

  test("should return an error when content is shorter than 10 characters", () => {
    const result = validateNote("Reminder", "short", "yellow");

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Content must be at least 10 characters long.");
  });

  test("should return false for unsupported note colors", () => {
    expect(isAllowedColor("purple")).toBe(false);
    expect(isAllowedColor("yellow")).toBe(true);
    expect(isAllowedColor("blue")).toBe(true);
    expect(isAllowedColor("green")).toBe(true);
    expect(isAllowedColor("pink")).toBe(true);
  });
});