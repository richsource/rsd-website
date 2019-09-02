const express = require('express')
const app = express()

app.use(express.static('site'))

setInterval(function() {
    http.get("http://www.ikrumov.com");
}, 300000); // every 5 minutes (300000)

var port = process.env.PORT || 1377;
app.listen(port);

console.log("Server running at http://localhost:%d", port); 
