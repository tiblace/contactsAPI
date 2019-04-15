// Import express
var express = require('express')

// Initialize the app
var app = express();

// Setup server port
var port = process.env.PORT || 8080;
// What is process.env.PORT?? Find out by console.logging it:
console.log(process.env);

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running API on port " + port);
});