const fs = require('fs');
const path = require('path');
const backend = require('./backend.js');
const dinoData = require('./dinosaurs.json');

function apiRequest(endpoint, response) {
  var queryString = endpoint.split("").slice(5).join("");
  console.log(queryString);
  // console.log(dinoData.dinosaurs);

console.log(backend.compareFunction(queryString, dinoData.dinosaurs));

  console.log('received API request. \nsee HTML.');
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('received API request. \nfiling request in bin.\njob done.', endpoint);
}

module.exports = apiRequest;
