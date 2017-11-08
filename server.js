
var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Hero = require('./api/models/heroModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Cylliandb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/heroRoutes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + 'not found gvd'})
});

app.listen(port);

console.log('CyllianLegends RESTful API server started on: ' + port);