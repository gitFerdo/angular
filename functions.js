"use strict";
// 1
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
function add2(a, b, c) {
    return a + b;
}
console.log(add2(2, 3));
function add3(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add2(2, 3));
// 2
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
// 3
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 3));
