#!/usr/bin/env node

var In = require('./index')
var add = require('./transform/add')
var log = require('./transform/log')
// ES6 Modules Please!

In(1)
  (add(1))
  (log) // Output 2
  (add(8))
  (log) // Output 10
