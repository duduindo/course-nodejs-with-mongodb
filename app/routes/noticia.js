module.exports = application => 
	application.get('/noticia', (req, res) => {	
		const connection = application.config.dbConnection();
		const { noticiasModel } = application.app.models;	

		noticiasModel.getNoticia(connection, (error, result) => {
			res.render('./noticias/noticia', {
				noticia: result
			});
		});
	});
