const http = require('http');
const handler = require('./handlers')
const port = process.env.PORT || 8080;

const server = http.createServer(handler);
server.listen(port, () => {
  console.log('listening on ', port);
});
