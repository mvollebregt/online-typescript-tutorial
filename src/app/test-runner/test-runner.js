var describes = [];
var its;
var expectations = [];

function describe(describeTekst, describeFunc) {
  describes.push([describeTekst, describeFunc]);
}

function it(itTekst, itFunc) {
  its.push([itTekst, function () {
    var i;
    expectations = [];
    itFunc();
    for (i = 0; i < expectations.length; i++) {
      expectations[i]();
    }
  }]);
}

function expect(observed) {
  return {
    toBe: function(expected) {
      expectations.push(function() {
        if (observed !== expected) {
          throw new Error('Waarde ' + observed + ' is niet gelijk aan verwachte waarde ' + expected);
        }
      });
    }
  }
}

window.buildTestSuite = function() {
  var testSuite = [];
  var i;
  for (i = 0; i < describes.length; i++) {
    its = [];
    describes[i][1]();
    testSuite.push([describes[i][0], its]);
  }
  return testSuite;
};

window.onerror = function(message, file, line, col, error) {
  document.write('<h1>Dat gaat niet goed!</h1>' + message);
};
