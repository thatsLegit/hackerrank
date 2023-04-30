'use strict';

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  let min = 0,
    max = 0;

  return scores.reduce(
    (acc, current, idx) => {
      if (!idx) {
        min = max = current;
        return [0, 0];
      }
      let [maxCount, minCount] = acc;
      if (current > max) {
        max = current;
        maxCount++;
      }
      if (current < min) {
        min = current;
        minCount++;
      }
      return [maxCount, minCount];
    },
    [0, 0]
  );
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
