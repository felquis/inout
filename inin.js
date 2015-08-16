#!/usr/bin/env node

var In = require('./index.js')
var add = require('./transform/add.js')
var log = require('./transform/log.js')
// ES6 Please!

In(1)
  (log)
  () // This returns an In with the previous data
  () // The same here
  (log) // Here the data still been 1
  (add(6)) // Now it is transformed to add 5
  (log) // It logs 7, my favority number
