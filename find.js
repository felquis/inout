#!/usr/bin/env node

var In = require('./index.js');

In(process.argv)
  (function (data) { return data.splice(2); })
  (function (data) { return data[0]; })
  (function (data) { console.log('Find: ', data); return data; })
  (function (data) {
    var exec = require('child_process').exec;

    var child = exec('ls -a | grep ' + data, function(err, stdout, stderr) {
      console.log(stdout);
    });

  return data;
});
