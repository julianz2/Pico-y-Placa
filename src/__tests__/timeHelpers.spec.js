import { isRestrictedByHours } from "../timeHelpers";
import { describe, it, expect } from "vitest";

describe("isRestrictedByHours", () => {
  describe("When it receives an hour that is inside the morning range", () => {
    it("should return true", () => {
      expect(isRestrictedByHours("8:30")).toBe(true);
    });
  });
  describe("When it receives an hour that is inside the evening range", () => {
    it("should return true", () => {
      expect(isRestrictedByHours("18:30")).toBe(true);
    });
  });
  describe("When it receives an hour that is not inside any of the ranges", () => {
    it("should return false", () => {
      expect(isRestrictedByHours("12:30")).toBe(false);
    });
  });
});
