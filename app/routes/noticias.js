module.exports = app => 
	app.get('/noticias', (req, res) => {	
		const connection = app.config.dbConnection();

		connection.query('select * from noticias', (error, result) => {
			res.render('./noticias/noticias', {
				noticias: result
			});
		});
	});
