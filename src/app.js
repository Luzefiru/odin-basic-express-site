const { createServer } = require('http'),
  { returnHTML, returnCSS } = require('./utils.cjs');

const server = createServer((req, res) => {
  const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/contact': 'contact.html',
  };

  if (req.method === 'GET') {
    let body;
    // serve .css files in public/css
    if (req.url.indexOf('.css') != -1) {
      body = returnCSS(req.url);
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(body);
      res.end();
    } else {
      // defaults to 404.html if first is undefined (route does not exist)
      body = returnHTML(routes[req.url] || '404.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(body);
      res.end();
    }
  }
});

const host = 'localhost';
const port = 8000;
server.listen(port, host, () => {
  console.log(`Server is now being hosted at: http://${host}:${port}`);
});
