import strictEquals from "./strictEquals";

describe("Given a compare function", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const equality = strictEquals(valueA, valueB);
      const expectedBoolean = true;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives 1 and '1'", () => {
    test("Then it should return false", () => {
      const valueA = 1;
      const valueB = "1";
      const equality = strictEquals(valueA, valueB);
      const expectedBoolean = false;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives true and false", () => {
    test("Then it should return false", () => {
      const valueA = true;
      const valueB = false;
      const equality = strictEquals(valueA, valueB);
      const expectedBoolean = false;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives false and false", () => {
    test("Then it should return true", () => {
      const valueA = false;
      const valueB = false;
      const equality = strictEquals(valueA, valueB);
      const expectedBoolean = true;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives 'water' and 'oil'", () => {
    test("Then it should return false", () => {
      const valueA = "water";
      const valueB = "oil";
      const equality = strictEquals(valueA, valueB);
      const expectedBoolean = false;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives NaN and NaN", () => {
    test("Then it should return false", () => {
      const valueA = NaN;
      const valueB = NaN;
      const equality = strictEquals(valueA, valueB);
      const expectedBoolean = false;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives -0 and 0", () => {
    test("Then it should return true", () => {
      const valueA = -0;
      const valueB = 0;
      const equality = strictEquals(valueA, valueB);
      const expectedBoolean = true;

      expect(equality).toBe(expectedBoolean);
    });
  });

  describe("When it receives 0 and -0", () => {
    test("Then it should return true", () => {
      const valueA = 0;
      const valueB = -0;
      const equality = strictEquals(valueA, valueB);
      const expectedBoolean = true;

      expect(equality).toBe(expectedBoolean);
    });
  });
});
