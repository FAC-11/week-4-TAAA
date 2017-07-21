function compareFunction (string, arrayOfStrings){
  var regex = new RegExp('^'+string+'\\w*',"i");
  var results = [];

  for (var i = 0; i < arrayOfStrings.length; i++) {
    if (results.length >= 5) {
      break;
    } else {
      if (arrayOfStrings[i].match(regex)) {
      results.push(arrayOfStrings[i]);
      }
    }
  }
    return results;
}

module.exports = {
  compareFunction,
}
