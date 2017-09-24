const express = require('express');
const app = express();
app.set('view engine', 'ejs'); // Engine of views
app.set('views', './app/views');

module.exports = app;