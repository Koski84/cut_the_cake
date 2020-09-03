const { divisors } = require("./index");

test("Divisors of 4", () => {
  expect(divisors(4)).toStrictEqual([1, 2, 4]);
});

test("Divisors of 10", () => {
  expect(divisors(10)).toStrictEqual([1, 2, 5, 10]);
});
