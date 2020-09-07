const { match, pipe, add, length, indexOf, split } = require("ramda");
const status = {
  RAISIN: "o",
  NOT_RAISIN: ".",
  USED: "x",
}

const countRaisins = pipe(match(/o/g), length);
const width = indexOf("\n");
const height = pipe(match(/\n/g), length, add(1));

const divisorsOf = (n) =>
  [...Array(n + 1).keys()].slice(1).filter((i) => n % i === 0);

const getPossibleShapesOfArea = (area) => {
  const divisors = divisorsOf(area);

  return divisors.map((n) => ({
    width: n,
    height: area / n,
  }));
};

const cakeArray = split(/\n/g);

module.exports = {
  divisorsOf,
  getPossibleShapesOfArea,
  cakeArray,
  status,
};

function cut(cake) {
  const raisins = countRaisins(cake);
  const w = width(cake);
  const h = height(cake);
  const area = w * h;

  console.log(raisins, w, h, area);
}

const cake = `........
..o.....
...o....
........`;

cut(cake);
