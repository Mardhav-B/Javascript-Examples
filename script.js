// My JavaScript 

// Execution Context
var number = 5; 
function square(num) { let result = num * num; return result; }
var squaredValue = square(number); 
console.log(squaredValue); 

// Hoisting
console.log(foo); 
hoistedFunction(); 
var foo = 10; 
function hoistedFunction() { console.log("Function hoisted"); }

// Scope & Lexical Environment
function outerFunction() { let outerVar = "outside"; function innerFunction() { console.log(outerVar); } innerFunction(); }
outerFunction();

// Closures
function createCounter() { let count = 0; return function () { count++; console.log(count); }; }
const myCounter = createCounter(); myCounter(); myCounter();

// Functions & Callbacks
function greet(callback) { console.log("Hi"); callback(); }
greet(() => { console.log("There"); });

// setTimeout & Event Loop
console.log("Start"); 
setTimeout(() => { console.log("Timeout"); }, 0); 
console.log("End");

// Block Scope & Shadowing
var z = 100; 
{ let z = 50; console.log(z); } 
console.log(z);

// var / let / const
const PI = 3.14; 

// Higher Order Functions
const nums = [1,2,3,4];
const doubled = nums.map(n => n*2); 
const even = nums.filter(n => n%2===0); 
const sum = nums.reduce((a,c)=>a+c,0);
console.log(doubled, even, sum);

// setTimeout Example
setTimeout(()=>{console.log("Hello after 3s");},3000);
