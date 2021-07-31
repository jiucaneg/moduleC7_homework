import { multiply } from "../index.js";

xdescribe("test multiply", () => {
  it("multiply 2 * 2 + 3 to equal 7", () => {
    const result = multiply(2, 2,3);
    expect(result).toBe(7);
  }),
    it("multiply 3 * 3 + 4 to equal 13", () => {
      const result = multiply(3, 3, 4);
      expect(result).toBe(13);
    });
    it("multiply 4 * 4 + 5 to equal 21", () => {
        const result = multiply(4, 4, 5);
        expect(result).toBe(21);
    });
});
