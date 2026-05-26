// let a = 10;
// let b = 20;

// let c = a + b;
// console.log("Sum is " + c);

// console.log(`Backsticks example: Sum of a and b is ${c}, this is a backstick`); //Example of backsticks

// let login = true;

// if (login) {
//   console.log("login successful");
// } else {
//   console.log(`login failed`);
// }

// .........................................................................................
/* ........................................................................................*/

//Comment in js are of two types: single line and multi line, they are used to explain the code and make it more readable, they are ignored by the compiler

//var, let, const
//var is function scoped, let and const are block scoped
//const cannot be reassigned, let can be reassigned

// let name = "Emeldo";
// name = "Emeldo M";
// console.log(name);

// var age = 25;
// age = 26;
// console.log(age);

// function sum(a, b) {
//   let result = a + b;
//   return result;
// }
// console.log(sum(5, 10));

// function greet(name) {
//   var message = `Hello, ${name}!`;
//   return message;
// }
// console.log(greet("Emeldo"));

/* ........................................................................................*/
/* ........................................................................................*/
/* ........................................................................................*/

// Datatypes in JavaScript:
// 1. Primitive Datatypes: string, number, boolean, null, undefined, symbol
// var name = "Emeldo"; //string
// var age = 25; //number
// var isStudent = true; //boolean
// var address = null; //null
// var phoneNumber; //undefined
// var uniqueId = Symbol("id"); //symbol

// //To show the type of a variable, we can use the typeof operator
// console.log(typeof name); //string
// console.log(typeof age); //number
// console.log(typeof isStudent); //boolean
// console.log(typeof address); //object
// console.log(typeof phoneNumber); //undefined
// console.log(typeof uniqueId); //symbol

// 2. Non-Primitive Datatypes: object, array, function
var person = {
  name: "Emeldo",
  age: 25,
  isStudent: true,
  address: {
    city: "Nairobi",
    country: "Kenya",
  },
  phoneNumber: "1234567890",
  uniqueId: Symbol("id"),
}; //object

//Accessing object properties
// console.log(person.name); //Emeldo : to access the name property of the person object
// console.log(person.age); //25 : to access the age property of the person object
// console.log(person.address.city); //Nairobi : to access the city property of the address object which is a property of the person object
// console.log(person.address.country); //Kenya : to access the country property of the address object which is a property of the person object
// console.log(person.phoneNumber); //1234567890 : to access the phoneNumber property of the person object

//Destructuring an object
// var { name, age, isStudent } = person; //to destructure the person object and assign the values of the name, age, and isStudent properties to the new variables name, age, and isStudent respectively
// console.log(name); //Emeldo : to show the value of the name variable which is the value of the name property of the person object
// console.log(age); //25 : to show the value of the age variable which is the value of the age property of the person object
// console.log(isStudent); //true : to show the value of the isStudent variable which is the value of the isStudent property of the person object

// // you can also rename the variables while destructuring
// var { name: myName, age: myAge, isStudent: myIsStudent } = person; //to destructure the person object and assign the values of the name, age, and isStudent properties to the new variables myName, myAge, and myIsStudent respectively
// console.log(myName); //Emeldo : to show the value of the myName variable which is the value of the name property of the person object

// //Array Destructuring
// var numbers = [1, 2, 3, 4, 5];
// var [first, second, third] = numbers; //to destructure the numbers array and assign the values of the first three elements to the new variables first, second, and third respectively

// console.log(first); //1 : to show the value of the first variable which is the value of the first element of the numbers array
// /* ........................................................................................*/
// /* ........................................................................................*/
// /* ........................................................................................*/

// var numbers = [1, 2, 3, 4, 5]; //array
// //OR
// var numbers = new Array(1, 2, 3, 4, 5); //array

// console.log(Array.isArray(numbers)); //true : to check if a variable is an array

// //Accessing array elements
// console.log(numbers[0]); //1 : to access the first element of the array
// console.log(numbers[1]); //2 : to access the second element of the array

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`Element in the array index ${i} is ${numbers[i]}`); //to access all the elements of the array using a for loop
// }

// //index of an element in the array
// console.log(numbers.indexOf(3)); //2 : to find the index of the element 3 in the array

/* ........................................................................................*/
/* ........................................................................................*/
/* ........................................................................................*/
//Array manipulation - Push, Pop, Shift, Unshift, Splice, Slice

// // Push - Adding an element to the end of the array
// numbers.push(6); //to add an element to the end of the array

// // Pop - Removing the last element of the array
// numbers.pop(); //to remove the last element of the array

// // Unshift - Adding an element to the beginning of the array
// numbers.unshift(0); //to add an element to the beginning of the array

// // Shift - Removing the first element of the array
// numbers.shift(); //to remove the first element of the array

// // Splice - Adding or removing elements from the array
// numbers.splice(2, 0, 10); //to add an element at index 2 without removing any element : the first parameter is the index to start from, the second parameter is the number of elements to remove, and the third parameter is the element to add (if any)
// numbers.splice(2, 1); //to remove an element at index 2 : the first parameter is the index to start from, the second parameter is the number of elements to remove, and the third parameter is the element to add (if any)

// // Slice - Extracting a portion of the array
// var newNumbers = numbers.slice(1, 4); //to extract elements from index 1 to index 4 (not inclusive of index 4)
// console.log(newNumbers); //[2, 10, 3] : to show the new array created by slicing the original array

// function greet(name) {
//   return `Hello, ${name}!`;
// } //function

// //To show the type of a variable, we can use the typeof operator
// console.log(typeof person); //object
// console.log(typeof numbers); //object (arrays are also objects in JavaScript)
// console.log(typeof greet); //function

// /* ........................................................................................*/
// /* ........................................................................................*/
// /* ........................................................................................*/
// //Concantenation in JavaScript is the process of combining two or more strings together. We can use the + operator or template literals to concatenate strings.
// var firstName = "Emeldo";
// var lastName = "M";
// var fullName = "My Fullname is " + firstName + " " + lastName;
// console.log(fullName); //Output: My Fullname is Emeldo M

// //Using template literals (backticks) for concatenation
// var fullNameTemplate = `My Fullname is ${firstName} ${lastName}`;
// console.log(fullNameTemplate); //Output: My Fullname is Emeldo M

// console.log("Hello world".toLowerCase()); //Output: hello world
// console.log("Hello world".toUpperCase()); //Output: HELLO WORLD
// console.log("   Hello world   ".trim()); //Output: Hello world
// console.log("Hello world".length); //Output: 11
// console.log("Hello world".indexOf("world")); //Output: 6 : meaning the word "world" starts at index 6
// console.log("Hello world".slice(0, 5)); //Output: Hello : meaning it will slice the string from index 0 to index 5 (not inclusive of index 5)
// console.log("Hello world".substring(0, 5)); //Output: Hello : meaning it will slice the string from index 0 to index 5 (not inclusive of index 5)
// //Difference between slice and substring is that slice can accept negative index, while substring cannot accept negative index
// console.log("Hello world".slice(-5)); //Output: world : meaning it will slice the string from index -5 to the end of the string

// console.log("Hello world".replace("world", "JavaScript")); //Output: Hello JavaScript

/* ........................................................................................*/
/* ........................................................................................*/
/* ........................................................................................*/

// Opperators in JavaScript are used to perform operations on variables and values. They can be categorized into several types:

// // 1. Arithmetic Operators: +, -, *, /, %, ++, --
// console.log("Addition: " + (5 + 10)); //Output: Addition: 15
// console.log("Subtraction: " + (10 - 5));
// console.log("Multiplication: " + 5 * 10); //Output: Multiplication: 50
// console.log("Division: " + 10 / 5); //Output: Division: 2
// console.log("Modulus: " + (10 % 3)); //Output: Modulus: 1
// let a = 5;
// console.log("Increment: " + a++); //Output: Increment: 5 (post-increment, returns the value before incrementing)
// console.log("Value of a after post-increment: " + a); //Output: Value of a after post-increment: 6

// // 2. Assignment Operators: =, +=, -=, *=, /=, %=
// let x = 10;
// console.log("x after += 5 (x = x + 5): " + (x += 5)); //Output: x after += 5: 15  //x = x + 5
// console.log("x after -= 3 (x = x - 3): " + (x -= 3)); //Output: x after -= 3: 12 //x = x - 3
// console.log("x after *= 2 (x = x * 2): " + (x *= 2)); //Output: x after *= 2: 24  //x = x * 2
// console.log("x after /= 4 (x = x / 4): " + (x /= 4)); //Output: x after /= 4: 6 //x = x / 4
// console.log("x after %= 5 (x = x % 5): " + (x %= 5)); //Output: x after %= 5: 1 //x = x % 5

// // 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// console.log("Equal to (==): ", 5 == "5"); //Output: Equal to (==): true (loose equality, compares values after type coercion)
// console.log("Strict Equal to (===): ", 5 === "5"); //Output: Strict Equal to (===): false (strict equality, compares values and types)
// console.log("Not Equal to (!=): ", 5 != "5");
// console.log("Strict Not Equal to (!==): ", 5 !== "5");
// console.log("Greater than (>): ", 10 > 5); //Output: Greater than (>): true
// console.log("Less than (<): ", 5 < 10); //Output: Less than (<): true
// console.log("Greater than or equal to (>=): ", 10 >= 10);
// console.log("Less than or equal to (<=): ", 5 <= 10); //Output: Less than or equal to (<=): true

// // 4. Logical Operators: &&, ||, !, ??
// console.log("NOT: ", !true); //Output: NOT: false : the ! operator negates the value of true to false
// console.log("AND: ", true && false); //another e.g: 1 && null = null
// console.log("OR: ", true || false); //another e.g: 1 || null = 1
// console.log("Nullish coalescing: ", null ?? "default"); //another e.g: null ?? "default" = "default"

// // 5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
// console.log("Bitwise AND: ", 5 & 3); //Output: Bitwise AND: 1 (0101 & 0011 = 0001) : meaning it will compare the bits of the two numbers and return a new number where each bit is 1 if both bits are 1, otherwise it will be 0
// console.log("Bitwise OR: ", 5 | 3); //Output: Bitwise OR: 7 (0101 | 0011 = 0111) : meaning it will compare the bits of the two numbers and return a new number where each bit is 1 if at least one of the bits is 1, otherwise it will be 0
// console.log("Bitwise XOR: ", 5 ^ 3); //Output: Bitwise XOR: 6 (0101 ^ 0011 = 0110) : meaning it will compare the bits of the two numbers and return a new number where each bit is 1 if the bits are different, otherwise it will be 0
// console.log("Bitwise NOT: ", ~5); //Output: Bitwise NOT: -6 (the ~ operator inverts the bits of the number, so 5 (0000 0101) becomes -6 (1111 1010))
// console.log("Left Shift: ", 5 << 1); //Output: Left Shift: 10 (0101 << 1 = 1010) : meaning it will shift the bits of the number to the left by the specified number of positions, filling the rightmost bits with 0s
// console.log("Right Shift: ", 5 >> 1); //Output: Right Shift: 2 (0101 >> 1 = 0010) : meaning it will shift the bits of the number to the right by the specified number of positions, filling the leftmost bits with the sign bit (0 for positive numbers, 1 for negative numbers)
// console.log("Unsigned Right Shift: ", 5 >>> 1); //Output: Unsigned Right Shift: 2 (0101 >>> 1 = 0010) : meaning it will shift the bits of the number to the right by the specified number of positions, filling the leftmost bits with 0s

/* ........................................................................................*/
/* ........................................................................................*/
/* ........................................................................................*/
//FLOW CONTROL IN JAVASCRIPT

// //if statement .. else
// let age = 18;
// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }
// //Tenary operator
// // let isAdult = age >= 18 ? "You are an adult." : "You are a minor.";
// // //OR
// // // let isAdult = age >= 18 ? true : false;
// // console.log(isAdult);

// // if .. else if .. else
// // if (age < 18 && age >= 13) {
// //   console.log("You are a teenager.");
// // } else if (age >= 18) {
// //   console.log("You are an adult.");
// // } else {
// //   console.log("You are a child.");
// // }

// //Switch statement
// let day = "Monday";
// switch (day) {
//   case "Monday":
//     console.log("It's Monday.");
//     break;
//   case "Tuesday":
//     console.log("It's Tuesday.");
//     break;
//   case "Wednesday":
//     console.log("It's Wednesday.");
//     break;
//   default:
//     console.log("It's not a weekday.");
// }

// let today = new Date().getDay(); //0 for Sunday, 1 for Monday, ..., 6 for Saturday
// console.log("Today is day number: " + today); //to show the day number of the week
// switch (today) {
//   case 0:
//     console.log("Today is Sunday.");
//     break;
//   case 1:
//     console.log("Today is Monday.");
//     break;
//   case 2:
//     console.log("Today is Tuesday.");
//     break;
//   case 3:
//     console.log("Today is Wednesday.");
//     break;
//   case 4:
//     console.log("Today is Thursday.");
//     break;
//   case 5:
//     console.log("Today is Friday.");
//     break;
//   case 6:
//     console.log("Today is Saturday.");
//     break;
// }

// //Loops in JavaScript
// for (let i = 0; i < 5; i++) {
//   console.log("For loop iteration: " + i); //to show the current iteration of the for loop
// }

// const countries = ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi"];
// for (let i = 0; i < countries.length; i++) {
//   countries[i] = countries[i].toUpperCase(); //to convert each country name in the array to uppercase using a for loop
// }
// console.log(countries);

// //While loop
// let count = 0;
// while (count < 5) {
//   console.log(count % 2 === 0 ? `${count} is even` : `${count} is odd`); //to check if the count is even or odd using a while loop
//   count++;
// }

//For...of loop
// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// for (const fruit of fruits) {
//   console.log(fruit.toUpperCase()); //to show each fruit in the fruits array using a for...of loop
// }

// // For...in loop
// const couples = {
//   Emeldo: {
//     age: 30,
//     account_balance: 100000,
//     city: "NL",
//   },
//   Linda: {
//     age: 25,
//     account_balance: 50000,
//     city: "NG",
//   },
// };
// sum_balance = 0;

// for (const couple in couples) {
//   console.log(
//     `Name: ${couple}, Age: ${couples[couple].age}, City: ${couples[couple].city}`,
//   ); //to show each key and value of the couples object using a for...in loop

//   sum_balance += couples[couple].account_balance; //to calculate the total account balance of all the couples in the couples object
// }
// console.log(`The couple total balance is: ${formatnumber(sum_balance)}`); //to show the total account balance of all the couples in the couples object

// //format number with commas as thousands separators
// function formatnumber(num) {
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

//Functions in JavaScript are reusable blocks of code that perform a specific task. They can be defined using function declarations, function expressions, or arrow functions.

/* ........................................................................................*/
/* ........................................................................................*/
/* ........................................................................................*/

//Function Declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Emeldo"); //Output: Hello, Emeldo!

function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); //Output: 15

//Void function - a function that does not return a value
function sayHello() {
  console.log("Hello!");
}
sayHello(); //Output: Hello!

//Function Expression
const greetExpression = function (name) {
  console.log(`Hello, ${name}!`);
};
greetExpression("Linda"); //Output: Hello, Linda!

//Arrow Function
const greetArrow = (name) => {
  console.log(`Hello, ${name}!`);
};
greetArrow("John"); //Output: Hello, John!

const age = (yearOfBirth = 0) => {
  let currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
};
console.log(age(1996)); //Output: 28 (assuming the current year is 2023)
console.log(age()); //Output: NaN (because yearOfBirth is not defined)
