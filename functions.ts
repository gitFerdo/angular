// 1
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

// Optional Parameter

function add2(a: number, b: number, c?: number): number {
  return a + b;
}

console.log(add2(2, 3));

function add3(a: number, b: number, c?: number): number {
  return c? a + b + c : a + b;
}

console.log(add3(2, 3));

// 2
const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(2, 3));

// Required Parameter
const sub2 = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;

console.log(sub2(2, 3));
console.log(sub2(2, 3, 5));

// 3
const mult = function (num1: number, num2: number): number{
    return num1 * num2;
}

console.log(mult(2, 3));

// Required Parameter
function add4(num1: number, num2: number, ...num3: number[]) : number{
    return num1 + num2 + num3.reduce((a, b) => a + b, 0)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(add4(2, 3, ...numbers));
console.log(add4(2, 3, ...[1, 2, 3, 4, 5, 6, 7]));