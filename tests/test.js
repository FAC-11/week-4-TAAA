var test = require('tape');
var functions = require('../src/backend');

test('compare function', function(t){
  t.equal(1,1,'Tape is running');

  var expectedOne = ['hi'];
  var actualOne = functions.compareFunction('hi',['a','hi','hello']);
  t.deepEqual(actualOne,expectedOne,'compareFunction returns a matching element in an array');

  var expectedOne = ['hi','high'];
  var actualOne = functions.compareFunction('hi',['a','hi','hello','high', 'ahi']);
  t.deepEqual(actualOne,expectedOne,'compareFunction matches the beginning of a string');
  t.end();
})
