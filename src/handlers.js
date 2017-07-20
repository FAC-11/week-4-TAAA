const fs = require('fs');
const path = require('path');
const apiRequest = require('./api.js');

const handler = (request, response) => {
  let endpoint = request.url;
  const method = request.method;


  console.log(endpoint + ', ' + method);
  // console.log (typeof(endpoint));

  const contentType = {
    // '/favicon.ico': 'image/x-icon',
    '/index.html': 'text/html',
    '/main.css': 'text/css',
    '/dom.js': 'application/javascript',
    '/logic.js': 'application/javascript',
    '/background.jpg': 'image/jpeg',
  };

  if (endpoint.startsWith('/API')) {
    apiRequest(endpoint, response);
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
          response.writeHead(500, { 'Content-Type': 'text/html'});
          response.end("There was a file error at our end. Sorry about that. Go have a cup of tea or something. Maybe we'll have fixed it...");
          return;
        }
        response.writeHead(200, { 'Content-Type': contentType[endpoint] });
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

module.exports = handler;
