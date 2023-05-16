// returns the closest inferior value to a given number within an array
function binarySearch(arr, value) {
  let start = 0,
    end = arr.length - 1,
    middle = 0,
    middleValue = 0;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    middleValue = arr[middle];

    if (middleValue === value) return middleValue;
    else if (middleValue > value) end = middle - 1;
    else start = middle + 1;
  }

  if (middleValue > value) return arr[middle - 1];
  else return middleValue;
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
  if (b <= 1) return -1;

  let bestValue = -1;

  for (let keyboard of keyboards) {
    const available = b - keyboard;
    if (available >= b) continue;
    const newValue = keyboard + binarySearch(drives, available);
    if (newValue > bestValue && newValue <= b) bestValue = newValue;
  }

  return bestValue;
}

function getMoneySpent2(keyboards, drives, b) {
  if (b <= 1) return -1;

  let bestValue = -1;

  for (let keyboard of keyboards) {
    for (let drive of drives) {
      const newValue = keyboard + drive;
      if (newValue > bestValue && newValue <= b) bestValue = newValue;
    }
  }

  return bestValue;
}

console.log(getMoneySpent2([40, 50, 60], [5, 8, 12], 60));
