const express = require('express');
const app = express();
// hconst mongoose = require('mongoose');
const path= require('path');
const morgan= require('morgan');
const bodyParser = require("body-parser");




app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("tiny"));
app.use(express.json());


app.get("/", async (req, res) => {
    try {
       
        res.render("index");
    } catch (error) {
        console.error("Error in route:", error);
        res.status(500).send("Internal Server Error"); 
    }
});


app.listen(process.env.PORT || 3000);