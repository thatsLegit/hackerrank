'use strict';

/*
    A jail has a number of prisoners and a number of treats to pass out to them. 
    Their jailer decides the fairest way to divide the treats is to seat 
    the prisoners around a circular table in sequentially numbered chairs. 
    A chair number will be drawn from a hat. 
    Beginning with the prisoner in that chair, one candy will be handed to each prisoner
    sequentially around the table until all have been distributed.

    The jailer is playing a little joke, though. 
    The last piece of candy looks like all the others, but it tastes awful. 
    Determine the chair number occupied by the prisoner who will receive that candy.
*/

/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n: number of prisoners
 *  2. INTEGER m: number of treats to be distributed
 *  3. INTEGER s: starting chair
 */

function saveThePrisoner(n, m, s) {
  if (n == 1) return 1;
  if (m % n === 0 && s === 1) return n;
  if (m % n === 0) return s - 1;
  const round = (m % n) + s - 1;
  return round > n ? round % n : round;
}

console.log(saveThePrisoner(13, 140874526, 1));
