import { User } from "./models/User";

console.log("Hi there!");

const user = new User({ name: "bret", age: 20 });

user.set({ name: "polly", age: 999 });

user.on("change", () => {
  console.log("change 1");
});
user.on("change", () => {
  console.log("change 2");
});
user.on("save", () => {
  console.log("save was triggered");
});

user.trigger("change");
user.trigger("save");
user.trigger("fake ");
