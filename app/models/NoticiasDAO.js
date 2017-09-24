
/**
 * Noticias 
 * DAO - Data Access Object
 */
class NoticiasDAO {
	constructor(connection) {
		this.connection	= connection; 
	}

	getNoticias(callback) {
		this.connection.query('select * from noticias', callback);
	}

	getNoticia(callback) {
		this.connection.query('select * from noticias where id_noticia = 2', callback);
	}

	salvarNoticia(noticia, callback) {
		this.connection.query('insert into noticias set ? ', noticia, callback);
	}
}

module.exports = () => (NoticiasDAO);