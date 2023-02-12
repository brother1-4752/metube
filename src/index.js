import morgan from "morgan";

const express = require("express");
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "src/views");

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(8080, () => console.log(`listening!`));
