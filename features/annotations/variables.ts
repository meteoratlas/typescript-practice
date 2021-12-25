let apples = 5; // type inference

let speed: string = "fast";

let hasName: boolean = true;

let nothing: null = null;

let undef: undefined = undefined;

let now: Date = new Date();

//
let colors: string[] = ["red", "green", "blue"];

let nyNymbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNum: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use type annotations
// 1) when a function returns the 'any' type
const json = '{"x":10, "y":20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);

// 2) when we declare and initialize a var at different times
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let index = 0; index < words.length; index++) {
  if (words[index] === "green") foundWord = true;
}

// 3) type cannot be reasonably inferred
let numbers = [-10, -1, 12];
let numAboveZero: boolean | number = false; // pipe to represent 'or' - number or boolean

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numAboveZero = numbers[i];
}
