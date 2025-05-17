/* -------------------------------------------------
   1. Simple for-loop
------------------------------------------------- */
(() => {
  for (let i = 0; i <= 10; i++) {
    if (i === 5) {
      // console.log("5 is best number");
    }
    // console.log(i);
  }
})();

/* -------------------------------------------------
   2. Nested for-loops (multiplication table demo)
------------------------------------------------- */
(() => {
  for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
      // console.log(`${i} * ${j} = ${i * j}`);
    }
  }
})();

/* -------------------------------------------------
   3. Iterating over an array with an index-based loop
------------------------------------------------- */
(() => {
  const heroes = ["flash", "batman", "superman"];
  // console.log(heroes.length);
  for (let idx = 0; idx < heroes.length; idx++) {
    // console.log(heroes[idx]);
  }
})();

/* -------------------------------------------------
   4. break & continue example
------------------------------------------------- */
(() => {
  for (let i = 1; i <= 20; i++) {
    if (i === 5) {
      console.log(`Detected 5`);
      continue;          // use "break" if you want to stop entirely
    }
    console.log(`Value of i is ${i}`);
  }
})();

/* -------------------------------------------------
   5. while loop counting by 2
------------------------------------------------- */
(() => {
  let index = 0;
  while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index += 2;
  }
})();

/* -------------------------------------------------
   6. while loop iterating an array
------------------------------------------------- */
(() => {
  const heroes = ["flash", "batman", "superman"];
  let idx = 0;
  while (idx < heroes.length) {
    // console.log(`Value is ${heroes[idx]}`);
    idx++;
  }
})();

/* -------------------------------------------------
   7. do...while loop
------------------------------------------------- */
(() => {
  let score = 11;
  do {
    console.log(`Score is ${score}`);
    score++;
  } while (score <= 10);
})();

/* -------------------------------------------------
   8. for-of with arrays & strings
------------------------------------------------- */
(() => {
  const numbers = [1, 2, 3, 4, 5];
  for (const num of numbers) {
    // console.log(num);
  }

  const greeting = "Hello world!";
  for (const ch of greeting) {
    // console.log(`Each char is ${ch}`);
  }
})();

/* -------------------------------------------------
   9. Map iteration
------------------------------------------------- */
(() => {
  const countries = new Map([
    ["IN", "India"],
    ["USA", "United States of America"],
    ["FR", "France"],
  ]);

  for (const [code, name] of countries) {
    // console.log(code, ":-", name);
  }
})();

/* -------------------------------------------------
  10. for-in with an object
------------------------------------------------- */
(() => {
  const languages = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
  };

  for (const key in languages) {
    // console.log(`${key} shortcut is for ${languages[key]}`);
  }
})();

/* -------------------------------------------------
  11. for-in with an array
------------------------------------------------- */
(() => {
  const programming = ["js", "rb", "py", "java", "cpp"];
  for (const idx in programming) {
    // console.log(programming[idx]);
  }
})();

/* -------------------------------------------------
  12. forEach demonstrations
------------------------------------------------- */
(() => {
  const coding = ["js", "ruby", "java", "python", "cpp"];

  // coding.forEach(val => console.log(val));

  const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java",        languageFileName: "java" },
    { languageName: "python",      languageFileName: "py" },
  ];

  myCoding.forEach(item => {
    console.log(item.languageName);
  });
})();

/* -------------------------------------------------
  13. filter examples
------------------------------------------------- */
(() => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const greaterThan4 = nums.filter(num => num > 4);
  // console.log(greaterThan4);

  const books = [
    { title: "Book One",  genre: "Fiction",     publish: 1981, edition: 2004 },
    { title: "Book Two",  genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three",genre: "History",     publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science",     publish: 2009, edition: 2014 },
    { title: "Book Six",  genre: "Fiction",     publish: 1987, edition: 2010 },
    { title: "Book Seven",genre: "History",     publish: 1986, edition: 1996 },
    { title: "Book Eight",genre: "Science",     publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
  ];

  const recentHistory = books.filter(
    bk => bk.genre === "History" && bk.publish >= 1995
  );
  console.log(recentHistory);
})();

/* -------------------------------------------------
  14. Chaining map & filter
------------------------------------------------- */
(() => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const processed = nums
    .map(num => num * 10)
    .map(num => num + 1)
    .filter(num => num >= 40);

  console.log(processed);
})();

/* -------------------------------------------------
  15. reduce examples
------------------------------------------------- */
(() => {
  const nums = [1, 2, 3];
  const total = nums.reduce((acc, curr) => acc + curr, 0);
  console.log(total);

  const shoppingCart = [
    { itemName: "js course",        price:  2999 },
    { itemName: "py course",        price:   999 },
    { itemName: "mobile dev course",price:  5999 },
    { itemName: "data science course",price:12999 },
  ];

  const priceToPay = shoppingCart.reduce(
    (acc, item) => acc + item.price,
    0
  );
  console.log(priceToPay);
})();
