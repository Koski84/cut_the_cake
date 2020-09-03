const { match, pipe, add, length, indexOf } = require("ramda");

const countRaisins = pipe(match(/o/g), length);
const width = indexOf("\n");
const height = pipe(match(/\n/g), length, add(1));

function cut(cake) {
  const raisins = countRaisins(cake);
  const w = width(cake);
  const h = height(cake);
  const area = w * h;

  console.log(raisins, w, h, area);
}

const cake =
`........
..o.....
...o....
........`;

cut(cake);
