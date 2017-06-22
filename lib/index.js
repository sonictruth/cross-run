exports.crossRun = function (scriptName) {
	var fs = require('fs');
	var crossEnv = require('cross-env');
	var package = JSON.parse(fs.readFileSync('package.json', 'utf8'));
	var script = package.scripts[scriptName];
	if(script){
		crossEnv(script.match(/\S+/g) || []);
		return true;
	} else {
		return false;
	}
};