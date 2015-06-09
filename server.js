var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var bandNames = [
"Purple Crown",
"Demognostica",
"Darkethic",
"Osmosis"];
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log('its abe a port ' + port);
});

var quotes = ["I like coffee", "I like egg nog", "I hate Being sick", "Benadryll makes me feel weird"]

app.get("/quote", function (req, res){
var randomIndex = Math.floor(Math.random()*quotes.length);
res.send(quotes[randomIndex]);
});

var jokes = [
{Q:"Why did the monkey fall from the tree?",
A:"Because it was dead."},
{Q:"Whats the difference between snowmen and snowwomen?",
A:"Snowballs."}
];

app.get("/joke",function (req, res) {
var randomIndex = Math.floor(Math.random()* jokes.length);
res.json(jokes[randomIndex]);
});
