// var testing = ['ahab', 'Aha the band from the 80s', 'Abraham Lincoln', 'bourbons'];


function clickable (ev) {
  var inputBox = document.getElementById('myInput');
  inputBox.value = ev.target.textContent;
};


function appendAList (resultsArray) {
  var prevList = document.getElementById ('results-list');
  if (prevList) {
    prevList.parentNode.removeChild(prevList);
  }
  var newList = document.createElement ('ul');
  if (resultsArray.length) {
    newList.id = 'results-list';
    resultsArray.forEach (function(el) {
      var newButton = document.createElement ('button');
      newButton.textContent = el;
      // newButton.addClass ('add-functionality');
      newButton.addEventListener ('click', clickable);

      newList.appendChild(newButton);

    });
  }

  document.getElementById ('dropdown-section').appendChild(newList);
}


// appendAList(testing);
