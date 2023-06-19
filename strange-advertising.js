'use strict';

/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
  let targets = 5;
  let cumulativeLikes = 0;

  for (let i = 0; i < n; i++) {
    const likes = Math.floor(targets / 2);
    cumulativeLikes += likes;
    targets = likes * 3;
  }

  return cumulativeLikes;
}

console.log(viralAdvertising(1));
