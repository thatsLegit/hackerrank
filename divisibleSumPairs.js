/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

// dummy solution, n^2 complexity: calculate all the possible sums
//

function divisibleSumPairs(n, k, ar) {
  let count = 0;

  if (n == 0) return 0;
  if (n == 1) return ar[0] % k === 0 ? 1 : 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) count++;
    }
  }

  return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
