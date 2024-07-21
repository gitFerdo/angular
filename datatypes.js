"use strict";
// String
let lname;
lname = "John";
// Capitalizated
let newName = lname.toUpperCase();
console.log(newName);
// Number
let age;
age = 24;
age = 25.5;
let num = "23";
let result = parseInt(num);
// Boolean
let isValid = false;
console.log(isValid);
// Array
// String array
let array;
array = ["John", "Nick", "Doe", "Chris"];
let arrayResult3 = array.find((name) => name === "John");
console.log(arrayResult3);
// Number array
let array2;
array2 = [1, 2, 3, 4, 5];
let arrayResult = array2.filter((num) => num > 2);
let arrayResult2 = array2.find((num) => num === 2);
let arrayResult4 = array2.reduce((acc, num) => acc + num);
console.log(arrayResult);
console.log(arrayResult2);
console.log(arrayResult4);
// lname = 10;
