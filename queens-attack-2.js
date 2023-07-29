'use strict'

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n: the number of rows and columns in the board
 *  2. INTEGER k: the number of obstacles on the board
 *  3. INTEGER r_q the row number of the queen's position
 *  4. INTEGER c_q the column number of the queen's position
 *  5. 2D_INTEGER_ARRAY obstacles: with rown and column of obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
    // calculate diagonals squares - 1 (position of the queen)
    // calculate row squares - 1 (position of the queen)
    // calculate columns squares - 1 (position of the queen)
    // substract obstacles

    // index all the squares of the board
    // define an attacking array for the queen
    // attack all the possible squares

    int RookDirection[4] = {-1, -8, 1, 8};
    const int BishopDirection[4] = {-7, -9, 9, 7};

}