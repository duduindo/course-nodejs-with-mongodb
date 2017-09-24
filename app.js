const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Engine of views

app.get('/tecnologia', (req, res) => {
	res.render('./secao/tecnologia');
});

app.get('/', (req, res) => {
	res.send('<html><body>Portal de noticias</body></html>');
});


app.listen(3000, () => {
	console.log('servidor rodando');
});