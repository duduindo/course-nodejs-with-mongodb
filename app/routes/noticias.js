module.exports = app => {

	app.get('/noticias', (req, res) => {
		const mysql = require('mysql');
	
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '<pass>',
			database: 'portal_noticias',
		});
	
		connection.query('select * from noticias', (error, result) => {
			res.send(result);
		});
	
		//res.render('./noticias/noticias');
	});
};