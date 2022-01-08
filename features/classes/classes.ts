class Vehicle {
  constructor(
    public color: string /* automatically makes color a field of this class */
  ) {}

  drive(): void {
    console.log("vroom");
  }
  private honk(): void {
    console.log("honk");
  }
}

const veh = new Vehicle("orange");
veh.drive();
// veh.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // color not given a accessor, since we want that to still belong to the parent class
    super(color);
  }
  drive(): void {
    console.log("brrrrrr");
  }

  public startDriving(): void {
    this.drive();
  }
}

const car = new Car(4, "red");
car.startDriving();
// car.honk();
