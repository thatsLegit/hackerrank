'use strict';

/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr) {
  const freqCounter = {};
  let repetitions = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwnProperty.call(freqCounter, arr[i])) freqCounter[arr[i]]++;
    else freqCounter[arr[i]] = 1;
  }

  for (const key in freqCounter) {
    if (freqCounter[key] > repetitions) repetitions = freqCounter[key];
  }

  return arr.length - repetitions;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
