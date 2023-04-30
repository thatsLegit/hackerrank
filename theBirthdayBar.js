'use strict';

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  let counter = 0,
    left = 0,
    right = 0,
    sum = 0;

  if (m > s.length) return 0;
  if (m === 1 && s.length === 1 && d === s[0]) return 1;

  while (right < s.length) {
    if (sum < d) {
      sum += s[right];
      right++;
    } else if (sum === d && right - left === m) {
      sum += s[right];
      sum -= s[left];
      counter++;
      left++;
      right++;
    } else {
      sum -= s[left];
      left++;
    }
  }

  return counter;
}

console.log(birthday([4], 4, 1));
