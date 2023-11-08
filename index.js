let express = require("express");
let app = new express();
const fs = require('fs');

app.set('view engine', 'ejs'); // Set EJS as the view engine

// set up database connection
const knex = require("knex")({
client: "mysql",
connection: {
host:"professor-signatures.cubk7kfdppzs.us-east-2.rds.amazonaws.com",
user: "admin",
password: "getthatbag",
database:"professors",
port: 3306,
},
});

//Connect to the home URL
app.get("/",(req,res) => {
knex
.select()
.from("professors")
.then((result) => {
res.render("index", {professorData: result});
});
});

app.listen(3000);
