/**
 * DOM Manipulation Cheat‑Sheet ✨
 * -----------------------------------
 * Author: Your Name
 * Use this file as quick reference / notes and commit it to GitHub.
 * All examples assume they run in a browser environment.
 * -----------------------------------
 * Table of Contents
 *  1. Selecting Elements
 *  2. Working with Attributes
 *  3. Reading & Writing Element Content
 *  4. HTMLCollection vs. NodeList
 *  5. querySelector vs. querySelectorAll
 *  6. Converting Collections to Arrays
 *  7. Mini Playground (uncomment to test)
 * -----------------------------------
 */

// ──────────────────────────────────
// 1. Selecting Elements
// ──────────────────────────────────

// By ID (returns a single Element)
const elById = document.getElementById("myId");

// By class (returns an HTMLCollection ➜ live)
const elsByClass = document.getElementsByClassName("myClass");

// By tag (returns an HTMLCollection ➜ live)
const allDivs = document.getElementsByTagName("div");

// querySelector / querySelectorAll (CSS selectors)
const firstCard   = document.querySelector(".card");      // first match
const allCards    = document.querySelectorAll(".card");   // NodeList (static)
const nestedSpan  = document.querySelector("#box span.highlight");

// ──────────────────────────────────
// 2. Working with Attributes
// ──────────────────────────────────

// Getting an attribute value
const img = document.querySelector("img.hero");
const src = img.getAttribute("src");

// Setting / updating an attribute
img.setAttribute("alt", "Landing Page Hero Image");

// Note: setAttribute() returns undefined; use getAttribute() again to verify

// Custom data‑attributes (always prefix with data‑*)
const card = document.querySelector(".card");
const id   = card.getAttribute("data-id");   // read
card.setAttribute("data-status", "active"); // write

// ──────────────────────────────────
// 3. Reading & Writing Element Content
// ──────────────────────────────────
const paragraph = document.querySelector("p.intro");

// All text, including hidden
console.log(paragraph.textContent);

// Only visible text (excludes display:none etc.)
console.log(paragraph.innerText);

// Inner HTML (tags + text)
console.log(paragraph.innerHTML);

// Updating content
paragraph.textContent = "Updated intro text.";

// ──────────────────────────────────
// 4. HTMLCollection vs. NodeList
// ──────────────────────────────────
/*
HTMLCollection
  • Live → updates automatically when DOM changes.
  • Returned by getElementsByClassName, getElementsByTagName, element.children.

NodeList
  • querySelectorAll ➜ static (does not auto‑update).
  • childNodes          ➜ live.
*/

// Example: Live vs. Static
const liveItems   = document.getElementsByClassName("item"); // HTMLCollection
const staticItems = document.querySelectorAll(".item");      // NodeList (static)

// Add new element
const ul   = document.querySelector("ul#list");
const li   = document.createElement("li");
li.className = "item";
li.textContent = "New Item";
ul.appendChild(li);

console.log(liveItems.length);   // updates automatically ✅
console.log(staticItems.length); // unchanged ❌

// ──────────────────────────────────
// 5. querySelector vs. querySelectorAll
// ──────────────────────────────────
/*
querySelector(selector)      ➜ first matching element
querySelectorAll(selector)   ➜ NodeList of all matches

Selectors follow full CSS syntax:
  • #id        ➜ document.querySelector("#logo")
  • .class    ➜ document.querySelectorAll(".btn.primary")
  • tag       ➜ document.querySelector("header")
  • attribute ➜ document.querySelector('[type="checkbox"]')
*/

// ──────────────────────────────────
// 6. Converting Collections to Arrays
// ──────────────────────────────────

// HTMLCollection ⇒ Array to use array methods
const divArray = Array.from(allDivs);
divArray.forEach(div => div.classList.add("scanned"));

// NodeList from querySelectorAll already supports forEach() but can be converted too:
const cardArray = [...allCards];

// ──────────────────────────────────
// 7. Mini Playground (uncomment to test in browser console)
// ──────────────────────────────────
/*
// 1️⃣ Select first list item and change its color
const firstLi = document.querySelector("ul#list li");
firstLi.style.color = "tomato";

// 2️⃣ Loop over all list items and prepend index
const listItems = document.querySelectorAll("ul#list li");
listItems.forEach((li, idx) => li.textContent = `${idx + 1}. ${li.textContent}`);
*/

// End of Cheat‑Sheet
