'use strict';
const fs = require('fs');

function saveThePrisoner(n, m, s) {
  if (n == 1) return 1;
  if (m % n === 0 && s === 1) return n;
  if (m % n === 0) return s - 1;
  const round = (m % n) + s - 1;
  return round > n ? round % n : round;
}

const cases = fs.readFileSync('./test-cases.txt', 'utf8');
const expectations = fs.readFileSync('./test-expectations.txt', 'utf8');

const casesLines = cases.split('\n').slice(1);
const expectationsLines = expectations.split('\n');

for (let i = 0; i < casesLines.length; i++) {
  const parameters = casesLines[i].split(' ').map(n => +n);
  const output = saveThePrisoner(...parameters);
  const expected = +expectationsLines[i];

  if (expected !== output) {
    console.log('failed test with the following parameters: ', ...parameters);
    console.log('expected: ', expected);
    console.log('received: ', output);
    console.log('\n');
  }
}
