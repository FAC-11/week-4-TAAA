

  function sendTextToApi(callback) {

    var txt = document.getElementById('myInput').value;
    // if string is empty or contains non-alphabetical characters
    if (txt === '' || txt.match(/[^A-Z]/ig)) {
      return callback([]);
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // appendAList(xhr.responseText);
        callback(JSON.parse(xhr.responseText));
      }
    };

    xhr.open("GET", '/API?' + txt, true);
    xhr.send();
  }
