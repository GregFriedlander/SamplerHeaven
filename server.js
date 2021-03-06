var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(session({secret: "SuperduperSecret"}));
app.use(express.static(path.join(__dirname, 'public', 'dist')));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(8000, function(){
	console.log("on port 8000");
})