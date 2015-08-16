/**
* Return a new Input ready to run modules.
* @param {[type]} data to be changed
*/
function In(data) {

	function Out(func) {
		return new In( (func || letItGo)(data) );
	}

	return Out;
}

function letItGo(data) {
	console.log('letItGo');

	return data;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = In;
} else {
	if (typeof define === 'function' && define.amd) {
		define([], function() {
			return In;
		});
	}
	else {
		window.In = In;
	}
}
