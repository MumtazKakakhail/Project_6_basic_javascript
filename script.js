let colors = ["red", "blue", "green", "yellow", "purple"];

// Use indexOf() to find the position of a specific color in your array.
let indexOfColor = colors.indexOf("green");
console.log("index of 'green':", indexOfColor);

// Use concat() to combine your colors array with another array of 3 more colors.
let newColors = colors.concat("orange", "pink", "brown");
console.log(newColors);

//Use push() to add a new color to the end of your array.
colors.push("black");
console.log(colors);

//Use pop() to remove the last color from your array.
let lastColor = colors.pop();
console.log("pop:", colors);
console.log("removed Color:", lastColor);

//Use shift() to remove the first color from your array.
let firstColor = colors.shift();
console.log("shift:", colors);
console.log("removed Color:", firstColor);

//Use unshift() to add a new color to the beginning of your array.
colors.unshift("white");
console.log("unshift:", colors);

// Use slice() to create a new array with the 2nd and 3rd elements from your colors array
let sliceColor = colors.slice(2, 3);
console.log("slice:", sliceColor);
console.log(colors);

//Use splice() to remove 2 elements from the middle of your array and replace them with 3 new colors.
colors.splice(3, 2, "sky-blue", "dark", "light-blue");
console.log("splice:", colors);

let numbers = [5, 8, 12, 3, 15, 7, 3, 11, 13, 26, 3];

//Create an array of numbers and use find() to locate the first number greater than 10.
let findNumbers = numbers.find((item) => item > 10);
console.log("find:", findNumbers);

//Use filter() to create a new array containing only even numbers from your numbers array.
let evenNumbers = numbers.filter((item) => item % 2 === 0);
console.log("filter:", evenNumbers);

// Loops and Iteration
// Use a traditional for loop to log each color in your array along with its index.
for (let i = 0; i < colors.length; i++) {
  console.log(`Index: ${i}, Color: ${colors[i]}`);
}

// Use forEach() to log each color in uppercase.
