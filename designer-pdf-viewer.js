'use strict';

// When a contiguous block of text is selected in a PDF viewer,
// the selection is highlighted with a blue rectangle.
// In this PDF viewer, each word is highlighted independently.

// There is a list of 26 character heights aligned by index to their letters.
// For example, 'a' is at index 0 and 'z' is at index 25.
// There will also be a string. Using the letter heights given,
// determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm^2 wide.

/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
  let max = 0;

  for (let i = 0; i < word.length; i++) {
    const idx = word.charCodeAt(i) - 97;
    if (h[idx] > max) max = h[idx];
  }

  return max * word.length;
}

console.log(
  designerPdfViewer(
    [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    'abc'
  )
);
