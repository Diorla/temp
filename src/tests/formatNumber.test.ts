import formatNumber from "../formatNumber";

describe("should format number using toFixed", () => {
  test("should handle NaN", () => {
    expect(formatNumber(NaN)).toBe("0.0000");
  });
  test("should handle all numbers", () => {
    expect(formatNumber(0)).toBe("0.0000");
    expect(formatNumber(1.2)).toBe("1.2000");
    expect(formatNumber(1.23)).toBe("1.2300");
    expect(formatNumber(1.234)).toBe("1.2340");
    expect(formatNumber(1.2345)).toBe("1.2345");
    expect(formatNumber(1.23456)).toBe("1.2346");
    expect(formatNumber(12.345678)).toBe("12.3457");
  });
});
