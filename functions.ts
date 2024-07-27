// 1
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

// 2
const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(2, 3));

// 3
const mult = function (num1: number, num2: number): number{
    return num1 * num2;
}

console.log(mult(2, 3));