import { User } from "./models/User";
import axios from "axios";

const user = new User({ id: 1, name: "bret", age: 0 });

user.on("change", function () {
  console.log(user);
});

user.save();
