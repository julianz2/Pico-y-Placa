import { getLastDigit, getDayNumber, isRestrictedByDay } from "../plateHelpers";
import { describe, it, expect } from "vitest";

describe("lastDigit", () => {
  describe("When it receives a plate number", () => {
    it("should return its last digit", () => {
      expect(getLastDigit("PDC-2325")).toBe(5);
    });
  });
});
describe("numberDay", () => {
  describe("When it receives a Date", () => {
    it("should return the number of the day", () => {
      // Monday 20th
      expect(getDayNumber("2023-02-20")).toBe(1);
    });
  });
});
describe("dayVerification", () => {
  describe("When it receives a plate digit that exist and it is part of the restriction array", () => {
    it("should return true", () => {
      // Monday 20th
      expect(isRestrictedByDay(1, 1)).toBe(true);
    });
  });
  describe("When it receives a plate digit that exist and it is not part of the restriction array", () => {
    it("should return false", () => {
      // Monday 20th
      expect(isRestrictedByDay(1, 3)).toBe(false);
    });
  });
});
