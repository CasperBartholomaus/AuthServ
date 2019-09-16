//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PACKAGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const express = require("express");

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CONFIGURATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const app = express();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ROUTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
app.get("/", function(req,res){
    res.send("First GET-Request");
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SERVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
app.listen(3000, () => {
    console.log("Server listening on port: 3000");
});