
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const handler = (request, response) => {
  const endpoint = request.url;
  const method = request.method;

  console.log(endpoint, ', ', method);


  const contentType = {
    '/favicon.ico': 'image/x-icon',
    '/index.html': 'text/html',
    '/main.css': 'text/css',
    '/script.js': 'application/javascript',
    '/img/image.jpg': 'image/jpeg',
  };

  if (endpoint === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (error, file) => {
      if (error) {
        console.log(error);
        return;
      }
          // response.write (message);
      response.end(file);
    });
  } else if (endpoint in Object.keys(contentType)) {
    response.writeHead(200, { 'Content-Type': contentType[endpoint] });
    const ourPath = path.join(__dirname, '..', 'public', endpoint);
    console.log(ourPath, typeof (ourPath));

    fs.readFile((ourPath), (error, file) => {
      if (error) {
        console.log(error);
        return;
      }
      response.write('serving you ...', endpoint);
      response.end(file);
    });
  }
};


const server = http.createServer(handler);
server.listen(3000, () => {
  console.log('listening on ', port);
});
