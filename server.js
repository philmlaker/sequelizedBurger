var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var router = express.Router();
var connection = require('./config/connection.js');
var methodOverride = require("method-override");
var app = express();
var PORT = process.env.PORT || 3030;
var db = require("./models");





// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

db.sequelize.sync().then(function(){
	app.listen(PORT,function(){
		console.log("listening on port %s", PORT);

	});

});
