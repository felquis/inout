#!/usr/bin/env node

var In = require('./index.js')
var add = require('./transform/add.js')
var log = require('./transform/log.js')
var say = require('./transform/say.js')
// ES6 Please!

var result = In(1)
  (log)
  (say('The Value Still The Same'))
  (log) // Here the data still been 1
  (add(6)) // Now it is transformed to add 6
  (log) // It logs 7, my favority number
  () // It returns the output data
