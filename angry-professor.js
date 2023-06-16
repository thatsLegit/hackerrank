'use strict';

/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
  a = a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      if (i >= k) return 'NO';
      else return 'YES';
    }
  }

  return 'YES';
}

console.log(angryProfessor(2, [0, -1, 2, 1]));
