'use strict';

/* 
    Given a range of numbered days,[i...j] and a number k, determine the number of days 
    in the range that are beautiful. Beautiful numbers are defined as numbers 
    where |i - reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, 
    it is a beautiful day. Return the number of beautiful days in the range.
*/

function isBeautiful(i, k) {
  const reversed = reverse(i);
  if (Math.abs(i - reversed) % k === 0) return true;
  return false;
}

function reverse(i) {
  const string = i + '';
  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    const character = string[i];
    result += character;
  }

  return result;
}

/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
  let counter = 0;

  for (let index = i; index <= j; index++) {
    if (isBeautiful(index, k)) counter++;
  }

  return counter;
}

console.log(beautifulDays(20, 23, 6));
