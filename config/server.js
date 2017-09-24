const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


const app = express();
app.set('view engine', 'ejs'); // Engine of views
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true})); // Middleware of application
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('config/dbConnection.js') // Better with extension JS
	.then('app/models')
	.into(app);

module.exports = app;