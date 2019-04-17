// Import express
var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//IMport our router
var apiRoutes = require('./api-router');

// Initialize the app
var app = express();

//Body-Parser to handle POST requests
app.use(bodyParser.urlencoded({
     extended: true
}));

app.use(bodyParser.json());

//Connect to the mongoDB
mongoose.connect('mongodb://localhost/contacts');
var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;
// What is process.env.PORT?? Find out by console.logging it:
//console.log(process.env);

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running API on port " + port);
});