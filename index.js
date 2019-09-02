const express = require('express')
const app = express()

app.use(express.static('site'))

var port = process.env.PORT || 1377;
app.listen(port);

console.log("Server running at http://localhost:%d", port); 
