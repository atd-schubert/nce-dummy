var fs = require("fs");

// exports["another"]= {} || require();

// Exports all local json files
var files = fs.readdirSync(__dirname);
var i;
for (i = 0; i<files.length; i++) if(/\.json$/i.test(files[i])) {
  exports[files[i].substr(0, files[i].length-5)] = require("./"+files[i]);
}