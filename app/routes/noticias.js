module.exports = application => 
	application.get('/noticias', (req, res) => {
		const connection = application.config.dbConnection();
		const { noticiasModel } = application.app.models;		
		
		noticiasModel.getNoticias(connection, (error, result) => {
			res.render('./noticias/noticias', {
				noticias: result
			});
		});		
	});
