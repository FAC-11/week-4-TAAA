const fs = require('fs');
const path = require('path');
const backend = require('./backend.js');
const dinoData = require('./dinosaurs.json');

function handleApiRequest(endpoint, response) {
  var queryString = endpoint.slice(5);
  var compareFunctionResult = backend.compareFunction(queryString, dinoData.dinosaurs);
  var stringifyResult = JSON.stringify(compareFunctionResult);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(stringifyResult);
}

module.exports = handleApiRequest;
