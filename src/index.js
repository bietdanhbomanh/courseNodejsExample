const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const route = require("./routes");
app.use(express.static(path.join(__dirname, "public")));

// Dùng middleware parse body (data) của phương thức post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// http logger
// app.use(morgan("combined"));

// template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// routes init
route(app);

app.listen(3000, () => console.log("Example app website"));
