'use strict';

function isInteger(n) {
    if (n == Math.floor(n)) return true;
    else return false;
}

/**
 * @description Is there an n so that x1 + v1 * n = x2 + v2 * n
 * @param {number} x1 
 * @param {number} v1 
 * @param {number} x2 
 * @param {number} v2 
 * @returns {"YES" | "NO"}
 */
function kangaroo(x1, v1, x2, v2) {
    if (x2 > x1 && v2 > v1) return "NO";
    if (x1 > x2 && v1 > v2) return "NO";

    const n = (x2 - x1) / (v1 - v2);
    if (n <= 0 || !isInteger(n) || n == Infinity) return "NO";

    return "YES";
}

console.log(kangaroo(43, 2, 70, 2));