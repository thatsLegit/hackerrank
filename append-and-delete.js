'use strict';

/**
 *
 * @param {string} initialWord
 * @param {string[]} lettersList
 * @returns {string[]}
 */
function wordGenerator(initialWord, target, lettersList) {
  const wordArray = [];

  // remove letter
  wordArray.push(initialWord.slice(0, initialWord.length - 1));

  // add letter
  if (initialWord.length < target.length) {
    /* optimization */
    for (let i = 0; i < lettersList.length; i++) {
      const newWord = initialWord + lettersList[i];
      wordArray.push(newWord);
    }
  }

  return wordArray;
}

/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t = '', k) {
  const lettersList = Array.from(new Set(t.split('')));

  const recursion = (word, depth) => {
    // optimizations
    if (word === t && depth >= word.length * 2) return true;
    if (word === t && depth % 2 === 0) return true;

    const match = t.match(word);
    if (match && match.index !== 0 && depth < s.length + t.length) {
      return false;
    }
    // if (!match && depth < s.length + t.length) return false;

    // base case
    if (depth === k) {
      if (word === t) return true;
      return false;
    }

    // generate other nodes
    const newWords = wordGenerator(word, t, lettersList);

    for (let i = 0; i < newWords.length; i++) {
      if (recursion(newWords[i], depth + 1)) return true;
    }

    return false;
  };

  return recursion(s, 0) ? 'Yes' : 'No';
}

// s: starting position, t: target
function appendAndDelete2(s, t, k) {
  if (s === t) {
    if (k >= s.length) return 'Yes';
    if (k < s.length && k % 2 === 0) return 'Yes';
    return 'No';
  }

  for (let i = s.length; i >= 0; i--) {
    const ss = s.substring(0, i);

    if (t.match(ss)) {
      if (t.length - ss.length <= k) return 'Yes';
      return 'No';
    }

    k--;
  }

  if (k >= t.length) return 'Yes';
  return 'No';
}

// Search tree with branching factor equal to the number of separate letters
// in s + 1 for deletion.
// 3 optimizations:
// s and t identical
// if k >= s.length: return yes
// if k < s.length && k % 2 === 0 ? return yes : return no
// That wasn't a good idea. Performance is not great. In fact it's exponential.

// s is a substring of t or a substring of s is a substring of t.

// s and t are completely different

console.log(appendAndDelete2('y', 'yu', 2));
