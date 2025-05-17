/* -------------------------------------------------
   JAVASCRIPT DEMO – ARRAYS, OBJECTS & FUNCTIONS
   -------------------------------------------------
   Sections:
     1. Array basics & methods
     2. Object creation & manipulation
     3. Nested objects and merging
     4. Function patterns (rest, params, etc.)
     5. Arrow vs. regular functions and `this`
------------------------------------------------- */

/* -------------------------------------------------
   1. ARRAY BASICS & METHODS
------------------------------------------------- */
(() => {
  const arr = [1, 2, 3, 4, 5];
  console.log("Original Array:", arr);

  // push / pop
  arr.push(6);                    // [1,2,3,4,5,6]
  arr.pop();                      // [1,2,3,4,5]

  // unshift / shift
  arr.unshift(0);                 // [0,1,2,3,4,5]
  arr.shift();                    // [1,2,3,4,5]

  // includes / indexOf
  console.log("Includes 3?", arr.includes(3)); // true
  console.log("Index of 4:", arr.indexOf(4));  // 3

  // join
  console.log("Joined with -:", arr.join("-")); // "1-2-3-4-5"

  // slice / splice
  console.log("Slice(1,4):", arr.slice(1, 4));  // [2,3,4]
  const removed = arr.splice(2, 1, 99);         // remove 1, insert 99
  console.log("After splice:", arr, "Removed:", removed); // [1,2,99,4,5] [3]

  // concat / spread
  const arr2 = [6, 7];
  console.log("Concat:", arr.concat(arr2));             // [1,2,99,4,5,6,7]
  console.log("Spread Combined:", [...arr, ...arr2]);   // same via spread

  // flat
  const nested = [1, 2, [3, 4], [5, [6]]];
  console.log("Flat(1):", nested.flat(1));  // [1,2,3,4,5,[6]]
  console.log("Flat(2):", nested.flat(2));  // [1,2,3,4,5,6]

  // Array.from / Array.of
  console.log("Array from string:", Array.from("Mayur"));  // ['M','a','y','u','r']
  console.log("Array.of:", Array.of(10, 20, 30));          // [10,20,30]
})();

/* -------------------------------------------------
   2. OBJECT CREATION & MANIPULATION
------------------------------------------------- */
(() => {
  const mysym = Symbol("Key1");
  const user = {
    name: "Mayur",
    age: 22,
    [mysym]: "new_Symbol",
    location: "Nagar",
    loginStatus: "Active",
    greet() {
      console.log("Good Morning");
    },
  };

  // update values
  user.location = "Pune";
  user.loginStatus = "Inactive";

  // freeze demo (uncomment to make object immutable)
  // Object.freeze(user);

  user.age = 30; // succeeds unless frozen
  console.log("User object:", user);
})();

/* -------------------------------------------------
   3. NESTED OBJECTS & MERGING
------------------------------------------------- */
(() => {
  const MAYUR = {
    name: "Mayur Lomate",
    email: "mayur@gmail.com",
    more_info: {
      first: "Mayur",
      last: "Lomate",
    },
  };

  const College = {
    clg_name: "D.Y.Patil",
    location: "Pimpri",
  };

  // merge using spread
  const info = { ...MAYUR, ...College };
  console.log("Merged object:", info);

  // keys / values / entries
  console.log("College keys:", Object.keys(College));
  console.log("College values:", Object.values(College));
  console.log("College entries:", Object.entries(College));

  // hasOwnProperty
  console.log("Has location?", College.hasOwnProperty("location"));
})();

/* -------------------------------------------------
   4. FUNCTION PATTERNS (REST, PARAMS, ETC.)
------------------------------------------------- */
(() => {
  // regular function
  function completion(username) {
    console.log(`Good Morning, ${username}`);
    return "Welcome To VS Code";
  }
  completion("Mayur");

  // rest parameters
  function call(...vals) {
    console.log("Values passed:", vals);
  }
  call(100, 200, 300, 400);

  // object param with destructuring
  const person = { fullName: "Mayur Lomate", age: 22 };
  function information({ fullName, age }) {
    console.log(`Full Name: ${fullName}, Age: ${age}`);
  }
  information(person);

  // array param
  const newArr = [100, 200, 300, 400];
  function arrpass(arr) {
    console.log(`Array values: ${arr}`);
  }
  arrpass(newArr);
})();

/* -------------------------------------------------
   5. ARROW VS. REGULAR FUNCTIONS & `this`
------------------------------------------------- */
(() => {
  // regular function (its own `this`)
  function chai() {
    console.log("Inside chai(), this =", this);
  }
  chai();

  // anonymous function expression
  const hello = function () {
    console.log("This is second way to declare the function");
  };
  hello();

  // arrow function
  const funcon = () => {
    console.log("Good Morning from arrow function");
  };
  funcon();

  // implicit-return arrow function
  const way2 = () => console.log("Good morning (implicit)");
  way2();
})();
