

module.exports = application => {
	application.get('/formulario_inclusao_noticia', (req, res) => {
		res.render('./admin/form_add_noticia');
	});

	application.post('/noticias/salvar', (req, res) => {
		const noticia = req.body;
				
		const connection = application.config.dbConnection();
		const noticiasModel = new application.app.models.NoticiasDAO(connection);		
		
		noticiasModel.salvarNoticia(noticia, (error, result) => {
			res.redirect('/noticias');
		});	
	});
};