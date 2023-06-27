'use strict';

/*
    c is an array of 0s and 1s, 0 being a cumulus and 1 a thundercloud.
    The character jumps by a distance of k each step and it has to
    return to its starting cloud.
    When the character lands on a cumulus, it loses only 1 energy.
    When the caracter lands on a thundercloud, it loses 1 - 2 = 3 energy.
    The function has to return the remaining level of energy, which starts at 100.
*/

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts ARRAY of INTEGER c as parameter and an INTEGER k.
 */
function jumpingOnClouds(c, k) {
  let position = 0;
  let energy = 100;

  do {
    position = (position + k) % c.length;
    if (c[position] === 1) energy -= 2;
    energy -= 1;
  } while (position !== 0 && energy > 0);

  return energy > 0 ? energy : 0;
}

function jumpingOnCloudsRecursive(c, k, p = 0, e = 100) {
  if ((p === 0 && e !== 100) || e <= 0) return e > 0 ? e : 0;
  if (c[p] === 1) e -= 2;
  e -= 1;
  return jumpingOnCloudsRecursive(c, k, (p + k) % c.length, e);
}

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
console.log(jumpingOnCloudsRecursive([0, 0, 1, 0, 0, 1, 1, 0], 2));
