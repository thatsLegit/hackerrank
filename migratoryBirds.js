'use strict';

function migratoryBirds(arr) {
  let counter = {};

  for (let type of arr) {
    if (Object.hasOwnProperty.call(counter, type)) {
      counter[type]++;
    } else {
      counter[type] = 1;
    }
  }

  let returnTypeId = 1;

  for (const type in counter) {
    if (type == returnTypeId) continue;

    const currentCount = counter[type];
    const maxCount = counter[returnTypeId];

    if (currentCount < maxCount) continue;
    if (currentCount === maxCount && type > returnTypeId) continue;

    returnTypeId = type;
  }

  return returnTypeId;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
