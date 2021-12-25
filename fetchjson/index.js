"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (res) {
  const todo = res.data;
  const id = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}`);
});
