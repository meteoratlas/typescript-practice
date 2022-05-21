import { User } from "./models/User";
import axios from "axios";

const user = User.buildUser({ id: 2 });

user.on("change", function () {
  console.log(user);
});

user.fetch();
