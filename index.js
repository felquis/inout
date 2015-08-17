/**
* Return a new Input ready to run modules.
* @param {[type]} data to be changed
*/
function In(data) {
  function Out(Transform) {
    return Transform ? In( (Transform)(data) ) : data
  }

  return Out
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = In
} else {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return In
    });
  }
  else {
    window.In = In
  }
}
