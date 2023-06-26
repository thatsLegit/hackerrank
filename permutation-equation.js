'use strict';

/*
    Given a sequence of n integers, p(1), p(2), ...p(n) where each element is
    distinct and satisfies 1 <= p(x) <= n. For each x where 1 <= x <= n,
    that is x increments from 1 to n, find any integer y such that p(p(y)) ≅ x
    and keep a history of the values of y in a return array.
*/

/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
  const arr = [];

  for (let i = 0; i < p.length; i++) {
    const permutationIndex = p.indexOf(i + 1);
    const permutation = p.indexOf(permutationIndex + 1) + 1;
    arr.push(permutation);
  }

  return arr;
}

console.log(permutationEquation([4, 3, 5, 1, 2]));
// 1, 3, 5, 4, 2
// indice 1: value 1 at pos 4, 4 = position 1
// indice 2: value 2 at position 5, 5 = position 3
// indice 3: value 3 at position 2, 2 = position 5
// indice 4: value 4 at position 1, 1 = position 4
// indice 5: value 5 at position 3, 3 = position 2
