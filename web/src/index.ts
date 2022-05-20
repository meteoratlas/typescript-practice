import { User } from "./models/User";

console.log("Hi there!");

const user = new User({ name: "bret", age: 20 });

user.set({ name: "polly", age: 999 });

console.log(user.get("name"));
console.log(user.get("age"));
