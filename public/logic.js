var logic = {
  sendTextToApi: function(cbDealWithResults) {
    var txt = document.getElementById('myInput').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        //    (assuming that the stringified object has an array member called resultsArray)
        var resultsArray = JSONparse(xhr.responseText.resultsArray);
        cbDealWithResults (resultsArray);
      }
    };
    xhr.open("GET", '/API?' + txt, true);
    xhr.send();
  }
}
