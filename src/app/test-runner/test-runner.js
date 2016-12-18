var describes = [];
var its;

function describe(describeTekst, describeFunc) {
  describes.push([describeTekst, describeFunc]);
}

function it(itTekst, itFunc) {
  its.push([itTekst, itFunc]);
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
