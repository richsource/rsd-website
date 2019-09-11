const express = require('express')
const app = express()
const http = require("http");

app.use(express.static('site'))

//ping the website periodically, so that it does not fall asleep, free heroku apps fall asleep after a few minutes
setInterval(function() {
    http.get("http://www.richsourcedev.com/");
}, 300000); // every 5 minutes (300000)

var port = process.env.PORT || 1377;
app.listen(port);

console.log("Server running at http://localhost:%d", port); 
