//Tests for equality and inequality with strings
let str1: string = "hello";
let str2: string = "world";

console.log("Equality test:", str1 === str2); 
console.log("Inequality test:", str1 !== str2); 


//Tests using the lower case function
let str3: string = "HELLO";
let str4: string = "hello";

console.log("Lowercase equality test:", str3.toLowerCase() === str4.toLowerCase()); 


//Numerical tests
let num1: number = 5;
let num2: number = 10;

console.log("Equality test:", num1 === num2);
console.log("Inequality test:", num1 !== num2);
console.log("Greater than test:", num2 > num1);
console.log("Less than test:", num1 < num2); 
console.log("Greater than or equal to test:", num2 >= num1); 
console.log("Less than or equal to test:", num1 <= num2); 


//Tests using "and" and "or" operators:
let condition1: boolean = true;
let condition2: boolean = false;

console.log("AND operator:", condition1 && condition2); 
console.log("OR operator:", condition1 || condition2);


// Test whether an item is in an array:
let fruits: string[] = ["apple", "banana", "orange"];
console.log("Is 'banana' in the array?", fruits.indexOf("banana"));


// Test whether an item is not in an array: 
console.log("Is 'grape' not in the array?", !fruits.indexOf("grape"));