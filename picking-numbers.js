'use strict';

//? Given an array of integers, find the longest subarray where the
//? absolute difference between any two elements is less than or equal to 1.

// The best strategy would be to just use a counter.
// count the number of occurences of each number.
// if two numbers are adjacent in the set, add them together.

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  const arr = Array.from(new Set(a)).sort();
  let max = 0;
  let counter = {};

  if (arr.length === 1) return a.length;
  if (arr.length === 0) return 0;

  a.forEach(element => {
    if (element in counter) counter[element]++;
    else counter[element] = 1;
  });

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1 && counter[arr[i]] > max) max = counter[arr[i]];
    if (Math.abs(arr[i] - arr[i + 1]) <= 1 && counter[arr[i]] + counter[arr[i + 1]] > max) {
      max = counter[arr[i]] + counter[arr[i + 1]];
    } else if (counter[arr[i]] > max) max = counter[arr[i]];
  }

  return max;
}

const array = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(array));

// function counter(a, number) {
//   return a.reduce((acc, current) => (current === number ? acc + 1 : acc), 0);
// }

// console.log('4: ', counter(array, 4));
// console.log('5: ', counter(array, 5));
// console.log('97: ', counter(array, 97));
