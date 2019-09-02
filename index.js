const app = express()

var port = process.env.PORT || 1377;
app.listen(port);

console.log("Server running at http://localhost:%d", port); 
