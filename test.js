const { divisorsOf, getPossibleShapesOfArea, cakeArray } = require("./index");
describe("divisorsOf tests", () => {
  test("Divisors of 4", () => {
    expect(divisorsOf(4)).toStrictEqual([1, 2, 4]);
  });

  test("Divisors of 10", () => {
    expect(divisorsOf(10)).toStrictEqual([1, 2, 5, 10]);
  });
});

describe("getPossibleShapesOfArea tests", () => {
  test("Area 1", () => {
    expect(getPossibleShapesOfArea(1)).toStrictEqual([{ width: 1, height: 1 }]);
  });

  test("Area 2", () => {
    expect(getPossibleShapesOfArea(2)).toStrictEqual([
      { width: 1, height: 2 },
      { width: 2, height: 1 },
    ]);
  });

  test("Area 12", () => {
    expect(getPossibleShapesOfArea(12)).toStrictEqual([
      { width: 1, height: 12 },
      { width: 2, height: 6 },
      { width: 3, height: 4 },
      { width: 4, height: 3 },
      { width: 6, height: 2 },
      { width: 12, height: 1 },
    ]);
  });
});

describe("cakeArray tests", () => {
  test("Basic test", () => {
    const cake = `.o.`;

    const actual = cakeArray(cake);

    expect(actual[0]).toStrictEqual(cake);
  });

  test("Multiline test", () => {
    const cake = `.o.\no.o`;
    const expected = [".o.", "o.o"];

    const actual = cakeArray(cake);

    expect(actual).toStrictEqual(expected);
  });
});
