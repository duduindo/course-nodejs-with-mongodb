const mysql = require('mysql');

module.exports = () => (
	mysql.createConnection({
		host: 'localhost',
		user: 'noob',
		password: '123',
		database: 'portal_noticias',
	})
);