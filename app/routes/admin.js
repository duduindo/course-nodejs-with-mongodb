

module.exports = application => {
	application.get('/formulario_inclusao_noticia', (req, res) => {
		res.render('./admin/form_add_noticia');
	});

	application.post('/noticias/salvar', (req, res) => {
		const noticia = req.body;

		req.assert('titulo', 'Título é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório.').notEmpty()
		req.assert('resumo', 'Inválido: Entre 10 e 100').len(10, 100);
		req.assert('autor', 'Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Data é obrigatório').notEmpty();
		req.assert('noticia', 'Noticia é obrigatório').notEmpty();

		const erros = req.validationErrors();

		if (erros) {
			res.render('./admin/form_add_noticia');
			return false;
		}
				
		const connection = application.config.dbConnection();
		const noticiasModel = new application.app.models.NoticiasDAO(connection);		
		
		noticiasModel.salvarNoticia(noticia, (error, result) => {
			res.redirect('/noticias');
		});	
	});
};