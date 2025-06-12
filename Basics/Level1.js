// -----------------------------
// VARIABLE DECLARATION
// -----------------------------
const accountId = 1233;
let accountName = "Mayur Lomate";
let accountEmail = "mayurlomate2005@gmail.com";
let password = "12234";

console.table([accountId, accountName, accountEmail, password]);
// Note: Prefer `let` and `const` over `var` due to block scope behavior.


// -----------------------------
// TYPE CONVERSION
// -----------------------------
let value = "45";
console.log(typeof value);  // string

let conversion = Number(value);
console.log(conversion);    // 45

console.log(Number(undefined)); // NaN
console.log(Number(null));      // 0
// Always validate before converting types.


// -----------------------------
// DATA TYPES
// -----------------------------
// Primitive: Number, String, Boolean, Null, Undefined, Symbol, BigInt
// Non-Primitive: Object, Array, Function

let myArray = ["Mayur", "Babasaheb", "Lomate"];
let myFunction = function () {
    console.log("Good Morning Guys");
};
let myObject = {
    name: "Mayur",
    age: 20,
};

console.table([myArray, myObject]);
myFunction();


// -----------------------------
// MEMORY ALLOCATION
// -----------------------------
// Stack: Primitive types (value is copied)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10

// Heap: Non-primitive types (reference is copied)
let obj1 = { name: "Mayur" };
let obj2 = obj1;
obj2.name = "Lomate";
console.log(obj1.name); // Lomate


// -----------------------------
// STRING METHODS
// -----------------------------
let str = "  Hello JavaScript World!  ";

console.log(str.length);                  // Length
console.log(str.toUpperCase());          // To uppercase
console.log(str.toLowerCase());          // To lowercase
console.log(str.trim());                 // Trim whitespace
console.log(str.includes("JavaScript")); // Check substring
console.log(str.replace("World", "User")); // Replace text
console.log(str.slice(2, 10));           // Slice from index 2 to 9
console.log(str.split(" "));             // Split into array by space
console.log(str.charAt(6));              // Character at index
console.log(str.indexOf("JavaScript"));  // Index of substring
console.log(`Length is: ${str.length}`); // Template literal


// -----------------------------
// MATH METHODS
// -----------------------------
console.log(Math.abs(-7));         // Absolute value: 7
console.log(Math.round(4.6));      // Round: 5
console.log(Math.ceil(4.2));       // Ceiling: 5
console.log(Math.floor(4.9));      // Floor: 4
console.log(Math.min(4, 7, 2, 9)); // Minimum: 2
console.log(Math.max(4, 7, 2, 9)); // Maximum: 9
console.log(Math.random());        // Random number (0 to <1)
console.log(Math.floor(Math.random() * 10) + 1); // Random 1–10
console.log(Math.pow(2, 3));       // Power: 8
console.log(Math.sqrt(49));        // Square root: 7


// -----------------------------
// DATE & TIME METHODS
// -----------------------------
let currentDate = new Date();
console.log(currentDate);                     // Full date object
console.log(currentDate.toString());          // String format
console.log(currentDate.toDateString());      // Date only
console.log(currentDate.toLocaleDateString()); // Local date format
console.log(currentDate.toLocaleTimeString()); // Local time format
console.log(currentDate.getFullYear());       // Year
console.log(currentDate.getMonth() + 1);      // Month (0-indexed)
console.log(currentDate.getDate());           // Day of the month
console.log(currentDate.getHours());          // Hour
console.log(currentDate.getMinutes());        // Minutes
console.log(currentDate.getSeconds());        // Seconds
console.log(currentDate.getTime());           // Time in ms since 1970

let customDate = new Date("2025-01-01");
console.log(customDate.toDateString());       // Custom date

// Tip: Use toISOString() when working with backend or databases
console.log(currentDate.toISOString());

