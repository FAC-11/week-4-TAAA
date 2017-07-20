const http = require('http');
const handler = require('./handlers')
const port = 3000;

const server = http.createServer(handler);
server.listen(3000, () => {
  console.log('listening on ', port);
});
