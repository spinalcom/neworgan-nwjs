var conn, spinalCore, path, fs, vm;

spinalCore = require('spinalcore');
path = require('path');
fs = require('fs');
vm = require('vm');

vm.runInThisContext(fs.readFileSync(path.join(__dirname, './config.js')));
// vm.runInThisContext(fs.readFileSync(path.join(__dirname, './js-libraries/custom_lib/models.js')));

conn = spinalCore.connect("http://" + CONNECTION.user + ":" + CONNECTION.password + "@" + CONNECTION.host + ":" + CONNECTION.port);