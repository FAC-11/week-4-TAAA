function compareFunction (string, arrayOfStrings){
  var unshrunkResults = arrayOfStrings.filter(function(el){
    var regex = new RegExp('^'+string+'\\w*');
    shrinkFunction(unshrunkResults);
    return el.match(regex);

  })
}

function shrinkFunction(arrayOfStrings){

return arrayOfStrings.length <=  5 ? arrayOfStrings : arrayOfStrings.slice(0,5);

}

module.exports = {
  compareFunction,
}
