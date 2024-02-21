//Tests for equality and inequality with strings
var str1 = "hello";
var str2 = "world";
console.log("Equality test:", str1 === str2);
console.log("Inequality test:", str1 !== str2);
//Tests using the lower case function
var str3 = "HELLO";
var str4 = "hello";
console.log("Lowercase equality test:", str3.toLowerCase() === str4.toLowerCase());
//Numerical tests
var num1 = 5;
var num2 = 10;
console.log("Equality test:", num1 === num2);
console.log("Inequality test:", num1 !== num2);
console.log("Greater than test:", num2 > num1);
console.log("Less than test:", num1 < num2);
console.log("Greater than or equal to test:", num2 >= num1);
console.log("Less than or equal to test:", num1 <= num2);
//Tests using "and" and "or" operators:
var condition1 = true;
var condition2 = false;
console.log("AND operator:", condition1 && condition2);
console.log("OR operator:", condition1 || condition2);
// Test whether an item is in an array:
var fruits = ["apple", "banana", "orange"];
console.log("Is 'banana' in the array?", fruits.indexOf("banana"));
// Test whether an item is not in an array: 
console.log("Is 'grape' not in the array?", !fruits.indexOf("grape"));
