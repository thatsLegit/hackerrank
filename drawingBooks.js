/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  //   calculer la diff début -> p, p <- fin
  //   en déduire de quel coté on part
  // si la diff est paire et on part du début, diff / 2
  // si la diff est impaire et on part du début, diff / 2 - 1
  // si la diff est paire et on part de la fin, diff / 2
  // si la diff est impaire et on part de la fin, diff / 2 + 1

  const deltaEnd = n - p;
  const deltaStart = p;

  if (deltaStart <= deltaEnd) {
    return Math.floor(p / 2);
  }

  if (n % 2 === 0) return Math.ceil(deltaEnd / 2);
  return Math.floor(deltaEnd / 2);
}

console.log(pageCount(2, 1));
