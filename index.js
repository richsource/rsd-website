const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const uuidv4 = require('uuid/v4');
const favicon = require('serve-favicon');
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');
const datasourcePath = __dirname + '/app/data/location_history.json';
const fitnessDatasourcePath = __dirname + '/app/data/fitness.json';
const foodDatasourcePath = __dirname + '/app/data/food.json';
const http = require("http");

app.use(express.static('site'))

setInterval(function() {
    http.get("http://www.ikrumov.com");
}, 300000); // every 5 minutes (300000)

var port = process.env.PORT || 1377;
app.listen(port);

console.log("Server running at http://localhost:%d", port); 
