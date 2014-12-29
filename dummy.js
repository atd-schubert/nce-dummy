"use strict";

module.exports = function(nce){
  if(!nce) throw new Error("You have to specify the nce object");
  
//# Mandantory Setup:
  var ext = nce.createExtension({package: require("./package.json")});
  
  ext.on("install", function(event){ // set options, but don't run or make available in nce
    //# Seting extension-config:
    ext.config.route = ext.config.route || "/"+ext.name;
    /* nce-mongoose-store
    ext.config.modelName = ext.config.modelName || ext.name;
    */
    /* nce-winston
    ext.config.logger = ext.config.logger || {};
    */

    //# Declarations and settings:
    /* nce-winston
    ext.logger = nce.getExtension("winston").createLogger(ext.name, ext.config.logger);
    */
    
    /* nce-mongoose-store
    var store = nce.getExtension("mongoose-store");
    var schema = store.createSchema({});
    schema.methods.xy = function(){};
    schema.statics.xy = function(cb){cb();};
    ext.model = store.createModel(schema);
    */
  });
  
  ext.on("uninstall", function(event){ // undo installation
    //# Undeclare:
    /* nce-winston
    nce.getExtension("winston").removeLogger(ext.name);
    */
  });
  
  ext.on("activate", function(event){ // don't set options, just run, make available in nce or register.
	  if(nce.requestMiddlewares.indexOf(router) === -1) {
		  nce.requestMiddlewares.push(router);
	  }
  });
  
  ext.on("deactivate", function(event){ // undo activation
	  if(nce.requestMiddlewares.indexOf(router) !== -1) {
		  nce.requestMiddlewares.splice(nce.requestMiddlewares.indexOf(router), 1);
	  }
  });
  
//# Private declarations:
  var router = function(req, res, next){
    var backend = nce.getExtension("backend");
    if(req.url.substr(0, backend.config.route.length+ext.config.subRoute.length) === backend.config.route+ext.config.subRoute) {
      try{throw new Error("Dummy extension");} catch(e){console.error(e)};
    }

    return next();
  };

//# Public declarations and exports:
  ext.dummy = function(opts, cb){
    // a dummy method here...
  }
  
  return ext;
}