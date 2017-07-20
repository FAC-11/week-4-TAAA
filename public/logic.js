var logic = {
  sendTextToApi: function() {
    var txt = document.getElementById('myInput').value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('ready');
      }
    };

    xhr.open("GET", '/API?' + txt, true);
    xhr.send();
    console.log(xhr);

    // test purposes
    // document.getElementById('demo').textContent = txt;
  }
}
