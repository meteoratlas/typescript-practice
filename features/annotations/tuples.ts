const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40];

const carSpecs: [number, number] = [400, 4454];

// objects are more self-documenting than tuples, and should generally be preferred
const carStats = {
  horsepower: 400,
  weight: 4454,
};
