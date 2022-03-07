const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./db.js");
var companyController = require("./controllers/companyController.js");
var staffController = require("./controllers/staffController.js");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:8100" }));

//First parameter is the port number
app.listen(3010, () => console.log("Server started at port : 3010"));

app.use("/companies", companyController);
app.use("/staffs", staffController);
