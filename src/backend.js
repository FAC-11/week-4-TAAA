function compareFunction (string, arrayOfStrings){
  return arrayOfStrings.filter(function(el){
    var regex = new RegExp('^'+string+'\\w*');
    return el.match(regex);
  })
}

module.exports = {
  compareFunction,
}
