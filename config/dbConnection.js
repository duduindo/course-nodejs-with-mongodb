const mysql = require('mysql');

const connMySQL = () => (
	mysql.createConnection({
		host: 'localhost',
		user: 'noob',
		password: '123',
		database: 'portal_noticias',
	})
);

module.exports = () => (connMySQL);