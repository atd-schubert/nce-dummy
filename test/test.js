"use strict";

var NC = require("nc");
var Ext = require("../");
describe('Basic integration in NC', function(){
  var nc = new NC();
  it('should be insertable into NC', function(done){
    var ext = Ext(nc);
    if(ext) return done();
    return done(new Error("Is not able to insert extension into NC"));
  });
});
describe('Basic functions in NC', function(){
  var nc = new NC();
  var ext = Ext(nc);
  
  it('should be installable', function(done){
    if(ext.install()) return done();
    return done(new Error("Can not install extension"));
  });
  it('should be activatable', function(done){
    if(ext.activate()) return done();
    return done(new Error("Can not activate extension"));
  });
  it('should be deactivatable', function(done){
    if(ext.deactivate()) return done();
    return done(new Error("Can not deactivate extension"));
  });
  it('should be uninstallable', function(done){
    if(ext.uninstall()) return done();
    return done(new Error("Can not uninstall extension"));
  });
});