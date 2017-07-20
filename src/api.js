const fs = require('fs');
const path = require('path');

function apiRequest(endpoint, response) {
  var queryString = endpoint.split("").slice(5).join("");
  console.log(queryString);
  console.log('received API request. \nsee HTML.');
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('received API request. \nfiling request in bin.\njob done.', endpoint);
}

module.exports = apiRequest;
