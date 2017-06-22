exports.crossRun = function (scriptName) {
	var fs = require('fs');
	var path = require('path');
	var crossEnv = require('cross-env');
	var pathKey = Object.keys(process.env).find(x => x.toUpperCase() === 'PATH') || 'Path';
	var package = JSON.parse(fs.readFileSync('package.json', 'utf8'));
	var script = package.scripts[scriptName];

	var newPath = process.env[pathKey].split(path.delimiter);
	newPath.push(path.normalize(process.cwd() + path.sep + ['node_modules', '.bin'].join(path.sep)));
	process.env[pathKey] = newPath.join(path.delimiter);
;
	if(script){
		crossEnv(script.match(/\S+/g) || []);
		return true;
	} else {
		return false;
	}
};