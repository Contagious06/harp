var nixt = require('nixt')
var path = require('path')
var fs = require('fs-extra')
var should = require('should')
var harp = require('../')
var exec = require("child_process").exec

describe("harp init", function() {

  var outputPath  = path.join(__dirname, "out/harp")

  beforeEach(function(done){
    fs.remove(outputPath, function(err){
      fs.mkdirp(outputPath, done)
    })
  })

  after(function(done){
    exec("rm -rf " + outputPath, function() {
      done();
    })
  })

})
