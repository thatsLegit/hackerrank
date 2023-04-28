'use strict';

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  const start = a[a.length - 1];
  const end = b[0];
  let counter = 0;

  for (let i = start; i <= end; i++) {
    if (a.some(num => i % num !== 0)) continue;
    if (b.some(num => num % i !== 0)) continue;
    counter++;
  }

  return counter;
}

const a = [2, 4];
const b = [16, 32, 96];

console.log(getTotalX(a, b));
