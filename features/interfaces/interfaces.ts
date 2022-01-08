interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
    summary(): string;
  }

const oldCivic = {
  name: "civiv",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);
printVehicle({ name: "Accord" }); // does not match interface definition

//
const printSummary = (item: Reportable):void {
    console.log(item.summary)
}

const soda = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `This contains ${this.sugar} grams of sugar.`
    }
}

printSummary(oldCivic);
printSummary(soda)