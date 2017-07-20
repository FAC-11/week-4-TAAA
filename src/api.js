const fs = require('fs');
const path = require('path');
const backend = require('./backend.js');
const dinoData = require('./dinosaurs.json');

function apiRequest(endpoint, response) {
  var queryString = endpoint.slice(5);
var compareFunctionResult = backend.compareFunction(queryString, dinoData.dinosaurs);

  console.log('received API request. \nsee HTML.');
  response.writeHead(200, { 'Content-Type': 'application/json' });

  var stringifyResult = JSON.stringify(compareFunctionResult);

  

  console.log("stringify: " + JSON.stringify(compareFunctionResult));
  // stringify
  response.end(stringifyResult);
}

module.exports = apiRequest;
