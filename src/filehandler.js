const fs = require('fs');
const path = require('path');

function handleFileRequest(endpoint, response) {

  const contentType = {
    '/favicon.ico': 'image/x-icon',
    '/index.html': 'text/html',
    '/main.css': 'text/css',
    '/dom.js': 'application/javascript',
    '/logic.js': 'application/javascript',
    '/background.jpg': 'image/jpeg',
  }[endpoint];

console.log (endpoint,contentType);

  if (contentType) {
    response.writeHead(200, { 'Content-Type': contentType});
    fs.readFile(path.join(__dirname, '..', 'public', endpoint), (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/html'});
        response.end("There was a file error at our end. Sorry about that. Go have a cup of tea or something. Maybe we'll have fixed it...");
        return;
      }
      response.writeHead(200, { 'Content-Type': contentType});
      response.end(file);
    });
  }
  else {
    console.log ('404:',endpoint, contentType);
    response.writeHead(404, { 'Content-Type': 'text/html'});
    response.end('Nuttin');
  }

};

module.exports = handleFileRequest;
