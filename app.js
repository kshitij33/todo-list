// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

app.set("view engine","ejs");

app.get("/", function (req, res) {
    let day = date.getDate();
    // console.log("Hello world");
    // res.send("Hello world");
    
    // var day = ""
    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    //     // res.write("yaasss, weekk enddd!!!");
    // } else {
    //     day = "Weekday";
    //     // res.write("Crap work again");
    //     // res.write("hate weekdays");
    //     // res.write("Arey yaaaarrrrr");
    //     // res.send();
    // }

    // var day = new Date().toLocaleString('en-us', {weekday: 'long'});

    res.render("list", {listTitle : day, newListItems : items});
});

app.post("/",function(req, res){
    var item = req.body.newItem;
    console.log(req.body.list);
    if (req.body.list === "Work") {
        workItems.push(item);
        // console.log(workItems);
        res.redirect("/work");
    }else{
        items.push(item);
        // console.log(items);
        res.redirect("/");
    }
    // items.push(item);
    // console.log(task);
    // res.send("<h1>"+task+"</h1>");
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems : workItems});
})

// app.post("/work",function(req, res){
//     let item = req.body.newItem;
//     // workItems.push(item);
//     // console.log(task);
//     // res.send("<h1>"+task+"</h1>");
//     res.redirect("/work");
//     res.redirect("/work");
// });

app.get("/about",function(req, res){
    res.render("about");
})

app.listen(3000, function () {
    console.log("server is running on port 3000");
})

