'use strict';

// Complete the catAndMouse function below.
/**
 *
 * @param {integer} x
 * @param {integer} y
 * @param {integer} z
 * @returns 'Cat A' | 'Cat B' | 'Mouse C'
 */
function catAndMouse(catA, catB, mouseC) {
  if (catA === catB) return 'Mouse C';
  if ((catA + catB) / 2 === mouseC) return 'Mouse C';

  if (Math.abs(mouseC - catA) > Math.abs(mouseC - catB)) return 'Cat B';
  return 'Cat A';
}
