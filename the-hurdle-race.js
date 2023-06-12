'use strict';

/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    if (height[i] > max) max = height[i];
  }

  if (k >= max) return 0;
  return max - k;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
