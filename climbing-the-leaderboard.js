'use strict';

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function inverseBinarySearch(array, value) {
  let start = 0,
    end = array.length - 1,
    middle = 0;

  if (value === 90) {
    console.log('hello');
  }

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === value) return middle + 1;
    if (array[middle] > value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return start + 1;
}

function climbingLeaderboard(ranked, player) {
  // make a set from best scores, then binary search the ideal index of each
  // player's score.
  const set = Array.from(new Set(ranked));
  return player.map(score => inverseBinarySearch(set, score));
}

console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));
// output: [6, 5, 4, 2, 1]
