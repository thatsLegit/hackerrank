'use strict';

const isDivisibleBy = (number, divider) => number % divider === 0;

/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
function findDigits(n) {
  const number = n + '';
  let counter = 0;

  for (let i = 0; i < number.length; i++) {
    const element = +number[i];
    if (isDivisibleBy(n, element)) counter++;
  }

  return counter;
}

console.log(findDigits(12));
