// 1. Ways to print in Javascript
// console.log("Hello World!");
// alert("me");
// document.write("This is document write");

// 2. Javascript console API
// console.log("Hello World", "My first JS tutorial");
// console.warn("This is a warning!");
// console.error("This is an error");

// 3. Javascript variables
// Q: What are variables? Ans= Container to store data values.
// var number1 = 24;
// var number2 = 48;
// console.log(number1 + number2);

// 4. Data types in Javacript
// Numbers
// var num1 = 729;
// var num2 = 625;
// console.log(num1 + num2);

// String
// var str1 = "This is a string";
// console.log(str1);
// var str2 = "This is also a string";
// console.log(str2);

// Object
// var marks = {
//   Abhishek: 57,
//   Sagar: 56,
//   Sudipta: 55,
// };
// console.log(marks);

//Booleans
// var a = true;
// var b = false;
// console.log(a, b);

//Undefined
//var und = undefined;
// var und;
// console.log(und);

//null
// var n = null;
// console.log(n);

/* At a very high level, there are two types of data types in Javascript
1. Primitive Data Types:undefeined, null, number, string, boolean, symbol
2. Reference Data Types:
*/
// var arr = [1, 2, "sagar", 4, 5, 6];
// console.log(arr);
//Operators in Javascript
// var a = 72;
// var b = 24;
// console.log("The value of a+b is ", a + b);
// console.log("The value of a-b is ", a - b);
// console.log("The value of a*b is ", a * b);
// console.log("The value of a/b is ", a / b);
// console.log("The value of a%b is ", a % b);

// Assignment Operators
// var c = b;
// c += 2;
// console.log(c);
// c -= 2;
// console.log(c);
// c *= 2;
// console.log(c);
// c /= 2;
// console.log(c);

// Comparison Operators
// var x = 25;
// var y = 93;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

// Logical Operators

//Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical NOT
// console.log(!true);
// console.log(!false);

// Functions
// function avg(a, b) {
//   return (a + b) / 2;
// }

//DRY= Don't Repeat Yourself
//c1 = avg(5, 9);
//c2 = avg(35, 41);
//console.log(c1, c2);

// Conditionals in Javascript
// var age = 24;
// Single if statement
// if (age > 18) {
//     console.log("You are eligible for voting");
// }
// if-else statement
// if (age > 18) {
//     console.log("You are eligible for voting");
// } else {
//     console.log("You are eligible for voting");
// }

//Ways to print an array
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//First
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//Second
// arr.forEach(function (element) {
//     console.log(element);
// })

//var is old standard, Let is new standard for Javascript
// const p=0;
// p++;

// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

//break and continue
//remember the countine starts from '0'
// var arr = [1, 2, 3, 4, 5, 6, 7];
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break; //breaks the statement at i==2 means 3rd element in the array
//         continue; //skips printing arr element at i==2(3rd element) and then prints the rest
//     }
//     console.log(arr[i])
// }

//let myArr = ["Fan", "Camera", "Number", 24, null, true];
//Array methods
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("Sagar");
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// myArr.unshift("Fruit");
// console.log(myArr);
// const newLen = myArr.unshift("Sagar");
// console.log(newLen);
// console.log(myArr);

//String Methods in Javascript
// let myLovelyString = "Sagar is the best";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("Sagar"));
// console.log(myLovelyString.indexOf("the"));
// console.log(myLovelyString.slice(0, 8)); //basically prints the char from 0 to 7(n-1)
// d = myLovelyString.replace("Sagar", "Sudipta");
// d = myLovelyString.replace("best", "greatest");
// console.log(d, myLovelyString);
