'use strict';

function isLeap(year) {
  if (isCalendarJulians(year)) {
    if (year % 4 === 0) return true;
    else return false;
  }

  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;

  return false;
}

function isCalendarJulians(year) {
  return year < 1918;
}

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */
function dayOfProgrammer(year) {
  if (year === 1918) return '26.09.1918';
  if (isLeap(year)) return `12.09.${year}`;
  return `13.09.${year}`;
}

console.log(dayOfProgrammer(2017));
