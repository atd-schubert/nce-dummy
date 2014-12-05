"use strict";

module.exports = function(cms){
  if(!cms) throw new Error("You have to specify the cms object");
  
//# Mandantory Setup:
  var ext = cms.createExtension({package: require("./package.json")});
  
  ext.on("install", function(event){ // set options, but don't run or make available in cms
    //# Seting extension-config:
    ext.config.route = ext.config.route || "/"+ext.name;

    //# Declarations and settings:
  });
  
  ext.on("uninstall", function(event){ // undo installation
    //# Undeclare:
    
  });
  
  ext.on("activate", function(event){ // don't set options, just run, make available in cms or register.
	  if(cms.requestMiddlewares.indexOf(router) === -1) {
		  cms.requestMiddlewares.push(router);
	  }
  });
  
  ext.on("deactivate", function(event){ // undo activation
	  if(cms.requestMiddlewares.indexOf(router) !== -1) {
		  cms.requestMiddlewares.splice(cms.requestMiddlewares.indexOf(router), 1);
	  }
  });
  
//# Private declarations:
  var router = function(req, res, next){
    var backend = cms.getExtension("backend");
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