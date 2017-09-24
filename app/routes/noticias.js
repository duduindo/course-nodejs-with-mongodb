module.exports = app => {

	app.get('/noticias', (req, res) => {
		const mysql = require('mysql');
	
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '220691',
			database: 'portal_noticias',
		});
	
		connection.query('select * from noticias', (error, result) => {
			res.send(result);
		});
	
		//res.render('./noticias/noticias');
	});
};