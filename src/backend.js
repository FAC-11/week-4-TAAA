function compareFunction (string, arrayOfStrings){
  var unshrunkResults = arrayOfStrings.filter(function(el){
    var regex = new RegExp('^'+string+'\\w*',"i");
    return el.match(regex);
  })
    return shrinkFunction(unshrunkResults);
}

function shrinkFunction(arrayOfStrings){

var shrunkResults = (arrayOfStrings.length <=  5) ?
                                      arrayOfStrings :
                                       arrayOfStrings.slice(0,5);
return shrunkResults;
}

module.exports = {
  compareFunction,
}
