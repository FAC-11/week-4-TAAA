
const handleApiRequest = require('./apihandler.js');
const handleFileRequest = require ('./filehandler.js')

const handler = (request, response) => {
  let endpoint = request.url;
  const method = request.method;

  if (endpoint.startsWith('/API')) {
    handleApiRequest(endpoint, response);
  }
  else
    if (endpoint === '/') {
      handleFileRequest('/index.html', response);
  }
    else
      handleFileRequest(endpoint, response);
};

module.exports = handler;
