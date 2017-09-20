var http = require("http");
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.write("<html><body><h1>Express</h1></body></html>");
});


//var server = http.createServer(function (req, res){
//	console.log(req.url);
//	res.write("<html><body><h1>" + req.url + "</h1></body></html>");
//	res.end();
//});

server.listen(3000);