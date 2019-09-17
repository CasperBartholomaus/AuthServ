//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PACKAGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
require("dotenv").config(); //Sets up dotenv as soon as the applications starts

const express = require("express");
const bodyParser = require("body-parser");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CONFIGURATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const app = express();
const environment = process.env.NODE_ENV;
const stage = require("./config")[environment];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ROUTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
require("./routes")(app);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SERVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
app.listen(stage.port, () => {
    console.log("Server listening on port: 3000");
});