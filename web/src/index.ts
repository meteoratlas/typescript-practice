import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";

const user = User.buildUser({ name: "Name!", age: 201 });
const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);
users.on("change", () => {
  const root = document.getElementById("root");
  if (root) {
    new UserList(root, users).render();
    console.log("doot", users);
  }
});
users.fetch();
// const root = document.getElementById("root");
// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
// } else {
//   throw new Error("No root element was found.");
// }
