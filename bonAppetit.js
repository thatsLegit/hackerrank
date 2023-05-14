/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function helper(bill, k, b) {
  const sum = bill.reduce((acc, current, idx) => {
    if (idx !== k) return acc + current;
    return acc;
  }, 0);

  if (sum / 2 === b) return 'bonAppetit';
  return b - sum / 2;
}

function bonAppetit(bill, k, b) {
  const result = helper(bill, k, b);
  console.log(result);
}

bonAppetit([3, 10, 2, 9], 1, 12);
