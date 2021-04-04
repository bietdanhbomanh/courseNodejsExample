const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// http logger
app.use(morgan("combined"));

// template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (reg, res) => res.render("home"));

app.get("/tintuc", (reg, res) => res.render("news"));

(() => console.log(12))();

app.listen(3000, () => console.log("Example app website"));
