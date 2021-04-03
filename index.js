const express = require("express");
const app = express();

app.get("/", (reg, res) =>
  res.send('<h1 style="color:black">Hello world!</h1>')
);

app.listen(3000, () => console.log("Example app website"));
