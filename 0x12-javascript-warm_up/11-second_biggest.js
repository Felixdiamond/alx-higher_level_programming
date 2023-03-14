#!/usr/bin/node

const args = process.argv.slice(2).map(Number);
const len = args.length;

if (len === 0 || len === 1) {
  console.log(0);
} else {
  let max = args[0];
  let secondMax = args[1];

  if (secondMax > max) {
    [max, secondMax] = [secondMax, max];
  }

  for (let i = 2; i < len; i++) {
    if (args[i] > max) {
      secondMax = max;
      max = args[i];
    } else if (args[i] > secondMax) {
      secondMax = args[i];
    }
  }

  console.log(secondMax);
}
