const carMakers = ["ford", "toyota", "chevy"];

const uninitialized: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];
// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent illegitimate values
carMakers.push(100); // this doesn't work

// help with map
carMakers.map((car: string): string => {
  return car;
});

// flexible types
// annotation only needed for arrays initialized as empty, or with only one type of value in initialization
const importantDates: (Date | string)[] = [new Date(), "2030-10-09"];
