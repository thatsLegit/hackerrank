'use strict';

function birthday(s, d, m) {
  let sum = 0,
    count = 0,
    length = 0;

  for (let i = 0; i < s.length; i++) {
    sum += s[i];
    length++;

    if (i > m - 1) {
      sum -= s[i - m];
      length--;
    }

    if (sum === d && length === m) {
      count++;
    }
  }

  return count;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
