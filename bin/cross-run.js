#!/usr/bin/env node

var lib = require('../lib/index.js');
var scriptName = process.argv.slice(2)[0];
if (scriptName) {
    if(!lib.crossRun(scriptName)){
        console.log('Missing script in package.');
    };
} else {
    console.log('Missing script name.');
    process.exit(1);
}