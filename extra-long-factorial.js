'use strict';

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
  if (n <= 1) return 1;
  return BigInt(n) * BigInt(extraLongFactorials(n - 1));
}

console.log(extraLongFactorials(25).toString());
