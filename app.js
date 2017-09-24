const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("<html><body>Portal de noticias</body></html>");
});

app.get('/tecnologia', (req, res) => {
	res.send("<html><body>Noticias de tecnologia</body></html>");
});

app.listen(3000, () => {
	console.log('servidor rodando');
});