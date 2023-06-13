'use strict';

// The Utopian Tree goes through 2 cycles of growth every year.
// Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring.
// How tall will the tree be after  growth cycles?

/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
  let tree = 1;

  if (n === 0) return 1;

  for (let i = 0; i < n; i++) {
    if (i % 2) tree++;
    else tree *= 2;
  }

  return tree;
}

console.log(utopianTree(3));
