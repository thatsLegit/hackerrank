'use strict';

/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
  let answer = 0;
  let arr = new Array(k).fill(0);

  s.forEach(val => arr[val % k]++);

  //   console.log(arr);

  if (arr[0] > 0) answer++;

  for (let i = 1; i < k; i++) {
    if (arr[i] == 0) continue;
    if (i + i == k) answer++;
    else {
      answer += Math.max(arr[i], arr[k - i]);
      arr[i] = 0;
      arr[k - i] = 0;
    }
  }

  return answer;
}

console.log(
  nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436])
);
