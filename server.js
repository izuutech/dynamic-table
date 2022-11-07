const express = require("express");
const app = express();
const tablehead = require("./tablehead.json");
const data = require("./data.json");

//set view engine
app.set("view engine", "ejs");

app.listen(5000, () => {
  console.log("App listening on port 5000!");
});

console.log(Object.entries(tablehead));
console.log(data);
app.get("/", (req, res) => {
  const keys = Object.entries(tablehead);
  res.render("index", { data, tablehead: keys });
});
