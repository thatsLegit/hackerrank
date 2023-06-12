// Typical Constraint Satisfaction Problem

const CONSTANT = 15;
const SQUARE_MAX_INDEX = 8;
const MAX_CSP = 7;

// backtracking solver definition:
// The idea is to start from an empty solution and set the variables one by one until we assign values to all.
// When setting a variable, we consider only the values consistent with those of the previously set variables.
// If we realize that we can’t set a variable without violating a constraint, we backtrack to one of those we set before.
// Then, we set it to the next value in its domain and continue with other unassigned variables.

// 6 ternary constraints:
// --> columns C1, C2 and C3 have a sum of 15
// --> row R1, R2 and R3 have a sum of 15
// 1 9-ary constraint
// --> all the numbers from 1 to 9 are present

// variable selection strategy:
// -no real strategy so far, just picking the squares one after the other

// value ordering strategy:
// choose the values that rule out fewer values from other domains
// Try the trivial value, then one that directly satisfies the constraint, i.e. sum 15.
function ordering(assignement, square) {
  const column = square % 3;
  const line = Math.floor(square / 3);
  const result = new Set();

  let lineSum = 0,
    columnSum = 0;

  if (column === 0)
    lineSum = assignement[square] + assignement[square + 1] + assignement[square + 2];
  else if (column === 1)
    lineSum = assignement[square] + assignement[square - 1] + assignement[square + 1];
  else lineSum = assignement[square] + assignement[square - 1] + assignement[square - 2];

  if (line === 0)
    columnSum = assignement[square] + assignement[square + 3] + assignement[square + 6];
  else if (line === 1)
    columnSum = assignement[square] + assignement[square - 3] + assignement[square + 3];
  else columnSum = assignement[square] + assignement[square - 3] + assignement[square - 6];

  const lineDelta = assignement[square] + CONSTANT - lineSum;
  const columnDelta = assignement[square] + CONSTANT - columnSum;
  if (lineDelta <= 9) result.add(lineDelta);
  if (columnDelta <= 9) result.add(columnDelta);

  for (let i = 1; i <= SQUARE_MAX_INDEX + 1; i++) result.add(i);

  return result;
}

// returns CSP array for a given assignement and constant
function getCSP(assignement) {
  return [
    assignement[0] + assignement[1] + assignement[2] === CONSTANT,
    assignement[3] + assignement[4] + assignement[5] === CONSTANT,
    assignement[6] + assignement[7] + assignement[8] === CONSTANT,
    assignement[0] + assignement[3] + assignement[6] === CONSTANT,
    assignement[1] + assignement[4] + assignement[7] === CONSTANT,
    assignement[2] + assignement[5] + assignement[8] === CONSTANT,
    new Set(assignement).size === 9 /* all numbers different */,
  ];
}

// Counts the number of satisfied conditions
function cspCounter(csp) {
  return csp.reduce((acc, current) => {
    if (current) acc++;
    return acc;
  }, 0);
}

function isImprovingCSP(current, incoming) {
  const currentCSPcount = cspCounter(current);
  const incomingCSPcount = cspCounter(incoming);
  if (incomingCSPcount > currentCSPcount) return true;
  // same count but we manage to keep the existing rules
  if (
    incomingCSPcount === currentCSPcount &&
    JSON.stringify(current) === JSON.stringify(incoming)
  ) {
    return true;
  }
  return false;
}

function diff(a, b) {
  let counter = 0;

  for (let i = 0; i <= SQUARE_MAX_INDEX; i++) {
    const delta = Math.abs(a[i] - b[i]);
    counter += delta;
  }

  return counter;
}

// There will be situations were you need to break the number unicity constraint
// You will need to check if it breaks more constraints than it satisfies.
// If it's even, it's ok to try.

// ! For now the algo gives a solution (not tested)
// ! The assignement is however expected to be the optimal one...

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */
function formingMagicSquareWithCSP(s) {
  // flatting the array because why would I need a f*cking 2d array ?
  const initialAssignement = s.flat();

  const backtrack = (assignement, square) => {
    const currentCSP = getCSP(assignement);
    if (cspCounter(currentCSP) === MAX_CSP) return assignement;

    if (square > SQUARE_MAX_INDEX) return false;

    const values = ordering(assignement, square);

    for (let v of values) {
      // add the new value to a new assignement
      const newAssignement = [...assignement];
      newAssignement[square] = v;
      // test it
      const valueCSP = getCSP(newAssignement);
      if (!isImprovingCSP(currentCSP, valueCSP)) continue;
      // go on with the next square
      const result = backtrack(newAssignement, square + 1);
      if (result) return result;
    }

    return false;
  };

  const completedMatrix = backtrack(initialAssignement, 0);
  return diff(initialAssignement, completedMatrix);
}

function printMatrix(s) {
  console.log(s[0], s[1], s[2]);
  console.log(s[3], s[4], s[5]);
  console.log(s[6], s[7], s[8]);
}

function drawRandomSquare() {
  const array = Array.from({ length: 9 }).map(() => Math.ceil(Math.random() * 9));
  console.log(array[0], array[1], array[2]);
  console.log(array[3], array[4], array[5]);
  console.log(array[6], array[7], array[8]);
}

// console.log(
//   formingMagicSquareWithCSP([
//     [4, 5, 8],
//     [2, 4, 1],
//     [1, 9, 7],
//   ])
// );

// There actually are some maths tricks to solve this problem easier and with
// an optimal solution: https://mindyourdecisions.com/blog/2015/11/08/how-many-3x3-magic-squares-are-there-sunday-puzzle/

function formingMagicSquare(s) {
  // knowing that there are only 8 possibilities to form magic squares in a 3x3 square
  // we can just see which one is shorter to make
  const magicSquares = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
  ];

  const assignement = s.flat();
  let min = Infinity;

  for (let element of magicSquares) {
    const delta = diff(element, assignement);
    if (delta < min) min = delta;
  }

  return min;
}

console.log(
  formingMagicSquare([
    [4, 5, 8],
    [2, 4, 1],
    [1, 9, 7],
  ])
);
