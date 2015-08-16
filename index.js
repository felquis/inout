/**
* Return an new Input ready to run modules.
* @param {[type]} data to be changed
*/
function Input(data) {

	function Output(func) {
		return new Input( (func || letItGo)(data) );
	}

	return Output;
}

function letItGo(data) {
	console.log('letItGo');

	return data;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = Input;
} else {
	if (typeof define === 'function' && define.amd) {
		define([], function() {
			return Input;
		});
	}
	else {
		window.Input = Input;
	}
}
