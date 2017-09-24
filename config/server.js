const express = require('express');
const consign = require('consign');

const app = express();
app.set('view engine', 'ejs'); // Engine of views
app.set('views', './app/views');

consign()
	.include('app/routes')
	.then('config/dbConnection.js') // Better with extension JS
	.then('app/models')
	.into(app);

module.exports = app;