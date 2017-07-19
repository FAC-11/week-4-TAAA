
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const handler = (request, response) => {
var endpoint = request.url;
  const method = request.method;


  console.log(endpoint + ', ' + method);
  console.log (typeof(endpoint));

  const contentType = {
    '/favicon.ico': 'image/x-icon',
    '/index.html': 'text/html',
    '/main.css': 'text/css',
    '/dom.js': 'application/javascript',
    '/logic.js': 'application/javascript',
    '/img/image.jpg': 'image/jpeg',
  };

  if (endpoint.startsWith ('/API')) {
    console.log('received API request. \nsee HTML.');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('received API request. \nfiling request in bin.\njob done.', endpoint);
  }         /////this block ('/API' is what we need to fill in. separate out querystring.)
  else {

    if (endpoint === '/') {
      endpoint = '/index.html';
      console.log('Got blank');
    }

    if (endpoint in contentType) {
      response.writeHead(200, { 'Content-Type': contentType[endpoint] });
      fs.readFile(path.join(__dirname, '..', 'public', endpoint), (error, file) => {
        if (error) {
          console.log(error);
          return;
        }
        response.end(file);
      });
    }
    else {
      console.log ('404:',endpoint, contentType[endpoint]);
      response.writeHead(404, { 'Content-Type': 'text/html'});
      response.end('Nuttin');
    }

  }
};


const server = http.createServer(handler);
server.listen(3000, () => {
  console.log('listening on ', port);
});
