const http = require('http');

const server = http.createServer((req, res) => {
    const category = req.url;

    switch(category) {
        case '/tecnologia':
            res.end('<html><body>Noticias de Tecnologia</body></html>');
        break;

        case '/moda':
            res.end('<html><body>Noticias de Moda</body></html>');
        break;

        case '/beleza':
            res.end('<html><body>Noticias de Beleza</body></html>');
        break;

        default:
            res.end('<html><body>Portal de Noticias</body></html>');
    }
});

server.listen(3000);