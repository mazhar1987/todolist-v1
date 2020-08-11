const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const port = process.env.PORT || 3000;

// let listItems = ["Buy Food", "Cook Food", "Eat Food"];
const listItems = [];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use("/public", express.static(__dirname + "/public"));

// Get data from root file
app.get("/", function (req, res) {
https://cli-auth.heroku.com/auth/cli/callback?code=b3964280-7224-4463-9dd1-3e1727c52a8a&state=03ba0b78-7c81-4cf9-baad-b5cfdad16c8f
    var day = date.getDate();

    // Display content in front end
    res.render("list", {listTitle: day, newListItems: listItems});
});

app.post("/", function (req, res) {

    // get user input item
    let item = req.body.newItem;

    if (req.body.list === "Work List") {

        workItems.push(item);
        res.redirect("/work");

    } else {
        // Push item in the array
        listItems.push(item);
        res.redirect("/");
    }

});

app.get("/work", function (req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});


app.listen(port, function () {
    console.log(`The server is running on http://localhost:${port}`);
});