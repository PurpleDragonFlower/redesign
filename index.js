const express = require('express');
const app = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// get all data/stuff of the body (POST) parameters
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public'));

require('./routes')(app); // pass our application into our routes

app.listen(3000, function(){
	console.log('listening on port 3000');
})

exports = module.exports = app;