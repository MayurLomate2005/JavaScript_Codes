// ------------------------------------
// ARRAY BASICS
// ------------------------------------
const arr = [1, 2, 3, 4, 5];
console.log("Original Array:", arr);

// ------------------------------------
// ARRAY METHODS
// ------------------------------------

// ✅ push() – adds element at the end
arr.push(6);
console.log("After push(6):", arr); // [1,2,3,4,5,6]

// ✅ pop() – removes last element
arr.pop();
console.log("After pop():", arr); // [1,2,3,4,5]

// ✅ unshift() – adds element at the beginning
arr.unshift(0);
console.log("After unshift(0):", arr); // [0,1,2,3,4,5]

// ✅ shift() – removes first element
arr.shift();
console.log("After shift():", arr); // [1,2,3,4,5]

// ✅ includes() – checks if element exists
console.log("Includes 3?", arr.includes(3)); // true

// ✅ indexOf() – returns index of element
console.log("Index of 4:", arr.indexOf(4)); // 3

// ✅ join() – joins array into string
const joined = arr.join("-");
console.log("Joined with -:", joined); // "1-2-3-4-5"

// ✅ slice() – returns shallow copy of part of array
const sliced = arr.slice(1, 4);
console.log("Slice(1,4):", sliced); // [2,3,4]

// ✅ splice() – modifies original array (add/remove elements)
const spliced = arr.splice(2, 1, 99); // at index 2, remove 1, add 99
console.log("After splice(2,1,99):", arr); // [1,2,99,4,5]
console.log("Removed item(s):", spliced); // [3]

// ✅ concat() – merges arrays, returns new
const arr2 = [6, 7];
const combined = arr.concat(arr2);
console.log("Concat arr2:", combined); // [1,2,99,4,5,6,7]

// ✅ spread (...) – modern way to combine arrays
const spreadCombined = [...arr, ...arr2];
console.log("Spread Combined:", spreadCombined); // [1,2,99,4,5,6,7]

// ✅ flat() – flattens nested arrays
const nested = [1, 2, [3, 4], [5, [6]]];
console.log("Flat(1):", nested.flat(1)); // [1,2,3,4,5,[6]]
console.log("Flat(2):", nested.flat(2)); // [1,2,3,4,5,6]

// ✅ Array.isArray() – checks if variable is array
console.log("Is Array?", Array.isArray(arr)); // true

// ✅ Array.from() – converts iterable or array-like to array
const str = "Mayur";
const fromStr = Array.from(str);
console.log("Array from string:", fromStr); // ['M','a','y','u','r']

// ✅ Array.of() – creates new array from arguments
const ofArray = Array.of(10, 20, 30);
console.log("Array.of(10,20,30):", ofArray); // [10,20,30]

